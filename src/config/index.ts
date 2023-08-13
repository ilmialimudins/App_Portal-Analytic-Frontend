// import getConfig from 'next/config';


// export interface AppSettings {
//   baseUrl: string;
// }

export const baseUrl = process?.env['API_BASE_URL'];

export type DropDown = {
    id : number
    name : string
    value : string
}

type DriverChart = {
    title : string
    value : {
        SP : number
        IM : number
        EVP : number
        SL : number
        CA : number
        VL : number
        GO : number
        LO : number
        EP : number
        PM : number
        RR : number
        CL : number
        WB : number
        DI : number
        WC : number
    }
}
export type DriverContributionChart = DriverChart[]

export type SESPDropdownOption = {
    id : number,
    name : string
}

export type Behaviour = {
    id : number
    name : string
    score : number
}

export type SustainableComparison = {
    id : number
    title : string
    value : {
        analytic : number,
        improvement : number
    }
}

export type QcodeOfQuestion = {
    average_per_qcode: number,
    percentage_all_favorabletype: number,
    count_respondent: number,
    question: string
}
export type TypeResultOfQuestion = {
    favorable_type: string,
    qcode: QcodeOfQuestion[]
}

export type Question = {
    factor_name: string,
    average_per_factor: number,
    result? : TypeResultOfQuestion[]
}

export type AverageDriver = {
    id : number
    title : string
    averageScore : number
    result? : QuestionAnswers
    amountOfQuestion? : number
}

export type QuestionAnswers = {
    blue : number[]
    orange : number[]
    red : number[]
}

export enum CHART_COLOR {
    BLUE = 'rgba(36, 76, 224, 0.8)',
    GRAY = 'rgb(135, 147, 170)',
    ORANGE = 'rgb(235, 121, 26)',
    RED = 'rgb(235, 55, 26)'
}
