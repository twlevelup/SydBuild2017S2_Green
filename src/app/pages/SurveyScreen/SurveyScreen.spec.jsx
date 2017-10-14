import React from 'react';
import { shallow } from 'enzyme';
import { SurveyScreenComponent, SurveyScreenButtons } from './SurveyScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<SurveyScreenComponent />', () => {
  let componentWrapper;
  const mockSurveyResponses = [{
    response: 'Excellent',
  },
  {
    response: 'Good',
  },
  {
    response: 'OK',
  },
  {
    response: 'No good',
  }];
  beforeEach(() => {
    jest.resetAllMocks();
    componentWrapper = shallow(<SurveyScreenComponent
      surveyResponses={ mockSurveyResponses }
      selectedIndex={ 0 }
    />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  describe('SurveyScreen', () => {
    describe('Survey Screen Display', () => {
      test('it should display the title, Survey', () => {
        expect(componentWrapper.find('.title')).toBePresent();
        expect(componentWrapper).toIncludeText('SURVEY');
      });

      test('should have class[survey-screen]', () => {
        expect(componentWrapper).toHaveClassName('survey-screen');
      });

      test('it should display the question for survey', () => {
        expect(componentWrapper.find('.question')).toBePresent();
        expect(componentWrapper).toIncludeText('How is your level of feeling today?');
      });
    });

    describe('Survey Response List', () => {
      test('should contain a ScrollList component', () => {
        expect(componentWrapper.find('ScrollList')).toBePresent();
      });
    });
  });

  describe('SurveyScreen Buttons', () => {
    test('it should have a LEFT button config of going to home page', () => {
      SurveyScreenButtons(componentWrapper).LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a RIGHT button config of doing nothing', () => {
      SurveyScreenButtons(componentWrapper).RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalled();
    });

    test('it should have a SCREEN button config of going to survey confirmation page', () => {
      SurveyScreenButtons(componentWrapper).SCREEN();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/survey-confirmation');
    });

    describe('Top button', () => {
      test('it should have a TOP button config of selecting previous survey response', () => {
        SurveyScreenButtons({ surveyResponses: mockSurveyResponses, selectedIndex: 1 }).TOP();
        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 0 },
        });
      });
      it('should roll back to the bottom', () => {
        SurveyScreenButtons({ surveyResponses: mockSurveyResponses, selectedIndex: 0 }).TOP();

        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 3 },
        });
      });
    });

    describe('Bottom button', () => {
      it('should set previous appointment', () => {
        SurveyScreenButtons({ surveyResponses: mockSurveyResponses, selectedIndex: 0 }).BOTTOM();

        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 1 },
        });
      });

      it('should roll back to the top', () => {
        SurveyScreenButtons({ surveyResponses: mockSurveyResponses, selectedIndex: 3 }).BOTTOM();

        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 0 },
        });
      });

      it('should default the selectedIndex to 0', () => {
        SurveyScreenButtons({ surveyResponses: mockSurveyResponses }).BOTTOM();

        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 1 },
        });
      });
    });
  });
});
