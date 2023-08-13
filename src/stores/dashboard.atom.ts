import { AverageDriver, Behaviour, DriverContributionChart, DropDown, Question, SESPDropdownOption, SustainableComparison } from '@/config';
import { atom } from 'jotai';

const countData = atom<number>(0);
const dropDownState = atom<boolean>(false)
const SESPQuestionParamSelected = atom<number>(1)

const dropDownValue = atom<DropDown[]>([
    {
      id : 1,
      name : 'AIHO',
      value : 'aiho'
    },
    {
      id : 2,
      name : 'Astra World Operation',
      value : 'astra-world-operation'
    },
    {
      id : 3,
      name : 'BMW Sales Operation',
      value : 'bmw-sales-operation'
    },
    {
      id : 4,
      name : 'Daihatsu Sales Operation',
      value : 'daihatsu-sales-operation'
    },
    {
      id : 5,
      name : 'PT Serasi Autoraya (TRAC) - TREMO',
      value : 'pt-serasi-autoraya-trac-tremo'
    },
    {
      id : 6,
      name : 'PT Surya Artha Nusantara Finance',
      value : 'pt-surya-artha-nusantara-finance'
    },
    {
      id : 7,
      name : 'Toyota Sales Operation',
      value : 'toyota-sales-operation'
    }
  ])  

const chartValue : DriverContributionChart = [
        {
            title : 'Enabled',
            value : {
                SP : 78,
                IM : 20,
                EVP : 10,
                SL : 78,
                CA : 12,
                VL : 56,
                GO : 13,
                LO : 68,
                EP : 12,
                PM : 19,
                RR : 89,
                CL : 10,
                WB : 98,
                DI : 2,
                WC : 75
            }
        },
        {
            title : 'Energized',
            value : {
                SP : 23,
                IM : 14,
                EVP : 87,
                SL : 12,
                CA : 42,
                VL : 34,
                GO : 29,
                LO : 96,
                EP : 67,
                PM : 89,
                RR : 3,
                CL : 53,
                WB : 9,
                DI : 72,
                WC : 18
            }
        },
        {
            title : "Engaged",
            value : {
                SP : 89,
                IM : 11,
                EVP : 8,
                SL : 13,
                CA : 35,
                VL : 86,
                GO : 45,
                LO : 89,
                EP : 46,
                PM : 12,
                RR : 34,
                CL : 80,
                WB : 12,
                DI : 48,
                WC : 30
            }
        }
    ]

const driverChartValue = atom<DriverContributionChart>(chartValue)

const SESPDivisions : SESPDropdownOption[] = [
  {
    id : 1,
    name : "Accounting"
  },
  {
    id : 2,
    name : "Astra Management Dev. Institute"
  },
  {
    id : 3,
    name : "BPI IT"
  },
  {
    id : 4,
    name : "Corp. Busdev"
  },
  {
    id : 5,
    name : "Corporate Communication"
  },
  {
    id : 6,
    name : "Corporate Strategic Planning"
  },
  {
    id : 7,
    name : "Environment & Social Responsibility"
  },
  {
    id : 8,
    name : "Shared Platform Development"
  }
]

const SESPDivisionValue = atom<SESPDropdownOption[]>(SESPDivisions)

const SESPDrivers : DropDown[] = [
  {
    id : 1,
    name : "Supervision",
    value : "supervision"
  },
  {
    id : 2,
    name : "Senior Leadership",
    value : "senior-leadership"
  },
  {
    id : 3,
    name : "Image",
    value : 'image'
  },
  {
    id : 4,
    name : "EVP",
    value : 'evp'
  },
  {
    id : 5,
    name : "Career Advancement",
    value : "career-advancement"
  },
  {
    id : 6,
    name : "Learning Opportunities",
    value : "learning-opportunities"
  },
  {
    id : 7,
    name : "Values",
    value : 'values'
  }
]

const SESPDriverValue = atom<DropDown[]>(SESPDrivers)

const SESPDemographies : DropDown[] = [
  {
    id : 1,
    name : "Divisi",
    value : "divisi"
  },
  {
    id : 2,
    name : "Department",
    value : 'department'
  },
  {
    id : 3,
    name : "Job Title",
    value : "job-title"
  },
  {
    id : 4,
    name : "Age Generation",
    value : "age-generation"
  },
  {
    id : 5,
    name : "Service Year",
    value : "service-year"
  },
]

const SESPDemographyValue = atom<DropDown[]>(SESPDemographies)

const SESPBehaviours : Behaviour[] = [
  {
    id : 1,
    name : "Engaged",
    score : 3.65
  },
  {
    id : 2,
    name : "Enabled",
    score : 3.23
  },
  {
    id : 3,
    name : "Energized",
    score : 3.55
  },
  {
    id : 4,
    name : "Sustainable Engagement",
    score : 3.48
  }
]

const SESPBehaviourValue = atom<Behaviour[]>(SESPBehaviours)

const SESPComparisons : SustainableComparison[] = [
  {
    id : 1,
    title : "Engaged",
    value : {
      analytic : 3.5,
      improvement : 3.75
    }
  },
  {
    id : 2,
    title : "Enabled",
    value : {
      analytic : 4.5,
      improvement : 4.25
    }
  },
  {
    id : 3,
    title : "Energized",
    value : {
      analytic : 3,
      improvement : 3.25
    }
  }
]

const SESPComparisonValue = atom<SustainableComparison[]>(SESPComparisons)

const SESPAverageDriver : AverageDriver[] = [
  {
    id : 1,
    title : "Supervision",
    averageScore : 4.25,
    result : {
      blue : [71, 69, 87, 80, 18],
      orange : [15, 20, 12, 8, 18],
      red : [14, 11, 1, 12, 64],
    },
    amountOfQuestion : 5
  },
  {
    id : 2,
    title : "Senior Leadership",
    averageScore : 4.20,
    result : {
      blue : [60, 69, 80, 80, 18],
      orange : [23, 20, 17, 8, 18],
      red : [17, 11, 3, 12, 64],
    },
    amountOfQuestion : 5
  },
  {
    id : 3,
    title : "Image",
    averageScore : 3.25,
    result : {
      blue : [91, 65, 87, 70, 18],
      orange : [4, 20, 12, 18, 18],
      red : [5, 15, 1, 12, 64],
    },
    amountOfQuestion : 5
  },
  {
    id : 4,
    title : "EVP",
    averageScore : 2.25
  },
  {
    id : 5,
    title : "Career Advancement",
    averageScore : 1.75
  },
  {
    id : 6,
    title : "Learning Opportunities",
    averageScore : 4.23
  },
  {
    id : 7,
    title : "Values",
    averageScore : 4.20
  },
  {
    id : 8,
    title : "Goals & Objectives",
    averageScore : 4.20
  }
]

const SESPAverageDriverListValue = atom<AverageDriver[]>(SESPAverageDriver)


const SESPQuestions : Question[] = [
  {
    factor_name: 'Supervision',
    average_per_factor: 4.25,
    result : [
      {
        favorable_type: 'favorable',
        qcode: [
          {
            average_per_qcode: 7.1,
            percentage_all_favorabletype: 3.0,
            count_respondent: 1500,
            question: 'Saya memahami arah dan tujuan perusahaan'
          },
          {
            average_per_qcode: 6.9,
            percentage_all_favorabletype: 2.3,
            count_respondent: 1500,
            question: 'test question 2'
          },
          {
            average_per_qcode: 8.0,
            percentage_all_favorabletype: 2.4,
            count_respondent: 1500,
            question: 'test question 3'
          },
        ]
      },
      {
        favorable_type: 'neutral',
        qcode: [
          {
            average_per_qcode: 1.5,
            percentage_all_favorabletype: 2.1,
            count_respondent: 1500,
            question: 'Saya tidak memahami arah dan tujuan perusahaan'
          },
          {
            average_per_qcode: 2.0,
            percentage_all_favorabletype: 1.1,
            count_respondent: 500,
            question: 'Teset question 8'
          },
          {
            average_per_qcode: 1.7,
            percentage_all_favorabletype: 2.2,
            count_respondent: 500,
            question: 'Teset question 9'
          },
        ]
      },
      {
        favorable_type: 'unfavorable',
        qcode: [
          {
            average_per_qcode: 1.4,
            percentage_all_favorabletype: 3.0,
            count_respondent: 1500,
            question: 'Saya suka makanan manis'
          },
          {
            average_per_qcode: 1.1,
            percentage_all_favorabletype: 3.0,
            count_respondent: 500,
            question: 'Teset question 5'
          },
          {
            average_per_qcode: 0.3,
            percentage_all_favorabletype: 3.0,
            count_respondent: 500,
            question: 'Teset question 6'
          },
        ]
      }
    ]
  },
  {
    factor_name: 'Senior Leadership',
    average_per_factor: 4.25,
    result : [
      {
        favorable_type: 'favorable',
        qcode: [
          {
            average_per_qcode: 3.25,
            percentage_all_favorabletype: 3.0,
            count_respondent: 1500,
            question: 'Teset test test'
          },
          {
            average_per_qcode: 2.5,
            percentage_all_favorabletype: 3.0,
            count_respondent: 1500,
            question: 'test question 2'
          }
        ]
      },
      {
        favorable_type: 'neutral',
        qcode: [
          {
            average_per_qcode: 3.25,
            percentage_all_favorabletype: 3.0,
            count_respondent: 1500,
            question: 'Test question 3'
          },
          {
            average_per_qcode: 4,
            percentage_all_favorabletype: 3.0,
            count_respondent: 500,
            question: 'Teset question 4'
        },
        ]
      },
      {
        favorable_type: 'unfavorable',
        qcode: [
          {
            average_per_qcode: 3.25,
            percentage_all_favorabletype: 3.0,
            count_respondent: 1500,
            question: 'Test question 3'
          },
          {
            average_per_qcode: 4,
            percentage_all_favorabletype: 3.0,
            count_respondent: 500,
            question: 'Teset question 4'
        },
        ]
      }
    ]
  },
  {
    factor_name: 'Image',
    average_per_factor: 4.25,
    result : [
      {
        favorable_type: 'favorable',
        qcode: [
          {
            average_per_qcode: 3.25,
            percentage_all_favorabletype: 3.0,
            count_respondent: 1500,
            question: 'Teset test test'
          },
          {
            average_per_qcode: 2.5,
            percentage_all_favorabletype: 3.0,
            count_respondent: 1500,
            question: 'test question 2'
          },
        ]
      },
      {
        favorable_type: 'neutral',
        qcode: [
          {
            average_per_qcode: 3.25,
            percentage_all_favorabletype: 3.0,
            count_respondent: 1500,
            question: 'Test question 3'
          },
          {
            average_per_qcode: 4,
            percentage_all_favorabletype: 3.0,
            count_respondent: 500,
            question: 'Teset question 4'
        },
        ]
      },
      {
        favorable_type: 'unfavorable',
        qcode: [
          {
            average_per_qcode: 3.25,
            percentage_all_favorabletype: 3.0,
            count_respondent: 1500,
            question: 'Test question 3'
          },
          {
            average_per_qcode: 4,
            percentage_all_favorabletype: 3.0,
            count_respondent: 500,
            question: 'Teset question 4'
        },
        ]
      }
    ]
  },
  {
    factor_name: 'EVP',
    average_per_factor: 4.25,
  },
  {
    factor_name: 'Career Advancemen',
    average_per_factor: 4.25,
  },
  {
    factor_name: 'Learning Opportunitie',
    average_per_factor: 4.25,
  },
  {
    factor_name: 'Values',
    average_per_factor: 4.25,
  },
  {
    factor_name: 'Goals & Objectives',
    average_per_factor: 4.25,
  },
]

const SESPQuestionListValue = atom<Question[]>(SESPQuestions)

const sortDD : DropDown[] = [
  {
    id : 1,
    name : "Low to High",
    value : "l2h"
  },
  {
    id : 2,
    name : "High to Low",
    value : "h2l"
  }
]

const sortDDValue = atom<DropDown[]>(sortDD)


const CSDemographies : DropDown[] = [
  {
    id : 1,
    name : "AllColumn",
    value : "allColumn"
  },
  {
    id : 2,
    name : "Validation",
    value : 'validation'
  },
  {
    id : 3,
    name : "RespondentID",
    value : "respondent-id"
  },
  {
    id : 4,
    name : "SurveyID",
    value : "survey-id"
  },
  {
    id : 5,
    name : "Data Version",
    value : "data_version"
  },
  {
    id : 6,
    name : "Business Line",
    value : "bsusiness_line"
  },
  {
    id : 7,
    name : "Company",
    value : "company"
  },
  {
    id : 8,
    name : "Location",
    value : "location"
  },
  {
    id : 9,
    name : "Directorate",
    value : "directorate"
  },
  {
    id : 10,
    name : "Division",
    value : "division"
  },
  {
    id : 11,
    name : "Department",
    value : "department"
  },
  {
    id : 12,
    name : "Branch",
    value : "branch"
  },
  {
    id : 13,
    name : "Job Title",
    value : "job_title"
  },
  {
    id : 14,
    name : "Grade",
    value : "grade"
  },
  {
    id : 15,
    name : "Birth Year",
    value : "birth_year"
  },
  {
    id : 16,
    name : "Entry Year (Astra)",
    value : "entry_year"
  },
  {
    id : 17,
    name : "Entry Year (Company)",
    value : "entry_year"
  },
  {
    id : 18,
    name : "Survey Year",
    value : "Survey_year"
  },
  {
    id : 19,
    name : "Age Group",
    value : "age_group"
  },
  {
    id : 20,
    name : "Age Generation",
    value : "age_generation"
  },
  {
    id : 21,
    name : "Service Year",
    value : "service_year"
  },
  {
    id : 22,
    name : "Entry Year Difference",
    value : "entry_year_difference"
  },
  {
    id : 23,
    name : "Age Generation",
    value : "age_generation"
  },
  {
    id : 24,
    name : "Filling Time",
    value : "filling_time"
  },
  {
    id : 25,
    name : "Similiar Answear",
    value : "similiar_answear"
  },
]

const CSDemographyValue = atom<DropDown[]>(CSDemographies)

export {
  countData,
  sortDDValue,
  dropDownState,
  dropDownValue,
  driverChartValue,
  SESPQuestionParamSelected,
  SESPDivisionValue,
  SESPDriverValue,
  SESPDemographyValue,
  SESPBehaviourValue,
  SESPComparisonValue,
  SESPQuestionListValue,
  SESPAverageDriverListValue,
  CSDemographyValue,
};

