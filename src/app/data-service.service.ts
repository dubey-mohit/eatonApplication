import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  languageTable = {}
  displayedColumns = ["repo", "npm", "status", "issues"];
  dataSource = [
    {repo: 'colors', npm:'https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&style=flat', status: 'https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat', issues:'https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&label=bugs'},
    {repo: 'angular-component-library', npm:'https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&style=flat', status: 'https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat', issues:'https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&label=bugs'},
    {repo: 'react-component-library', npm:'https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&style=flat', status: 'https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat', issues:'https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&label=bugs'},
    {repo: 'react-native-component-library', npm:'https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&style=flat', status: 'https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat', issues:'https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&label=bugs'},
    {repo: 'chartjs', npm:'https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&style=flat', status: 'https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat', issues:'https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&label=bugs'},
    {repo: 'highcharts', npm:'https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&style=flat', status: 'https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat', issues:'https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&label=bugs'},
    {repo: 'colors', npm:'https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&style=flat', status: 'https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat', issues:'https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&label=bugs'},
    {repo: 'colors', npm:'https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&style=flat', status: 'https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat', issues:'https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&label=bugs'},
    {repo: 'colors', npm:'https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&style=flat', status: 'https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat', issues:'https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&label=bugs'},
    {repo: 'colors', npm:'https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&style=flat', status: 'https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat', issues:'https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&label=bugs'},
    {repo: 'colors', npm:'https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&style=flat', status: 'https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat', issues:'https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&label=bugs'},
    {repo: 'colors', npm:'https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&style=flat', status: 'https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat', issues:'https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&label=bugs'},
    {repo: 'colors', npm:'https://img.shields.io/npm/v/@pxblue/colors.svg?label=@pxblue/colors&style=flat', status: 'https://img.shields.io/circleci/project/github/pxblue/colors/master.svg?style=flat', issues:'https://img.shields.io/github/issues/pxblue/colors/bug.svg?style=flat&label=bugs'},
  ]
  constructor() { }

  getLanguages () {
    return this.languageTable = {
      datasource: this.dataSource,
      columns: this.displayedColumns
    }
  }
}
