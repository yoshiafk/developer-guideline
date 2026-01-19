import React from 'react';
import { RouteObject } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import DotNetDeveloperGuidelinePage from './pages/DotNetDeveloperGuidelinePage';
import ReactDeveloperGuidelinePage from './pages/ReactDeveloperGuidelinePage';
import JavaDeveloperGuidelinePage from './pages/JavaDeveloperGuidelinePage';
import PythonDeveloperGuidelinePage from './pages/PythonDeveloperGuidelinePage';
import FlutterDeveloperGuidelinePage from './pages/FlutterDeveloperGuidelinePage';
import CleanArchitecturePage from './pages/CleanArchitecturePage';
import CodingStandardPage from './pages/CodingStandardPage';
import GitHubAxaUsagePage from './pages/GitHubAxaUsagePage';
import OpenShiftGuidelinePage from './pages/OpenShiftGuidelinePage';
import JenkinsGuidelinePage from './pages/JenkinsGuidelinePage';
import SonarQubeGuidelinePage from './pages/SonarQubeGuidelinePage';
import CleanCodeGuidelinePage from './pages/CleanCodeGuidelinePage';
import FinOpsGuidelinePage from './pages/FinOpsGuidelinePage';
import AWSArchitectureGuidelinePage from './pages/AWSArchitectureGuidelinePage';
import SearchResultsPage from './pages/SearchResultsPage';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'dotnet-developer-guideline', element: <DotNetDeveloperGuidelinePage /> },
            { path: 'react-developer-guideline', element: <ReactDeveloperGuidelinePage /> },
            { path: 'java-developer-guideline', element: <JavaDeveloperGuidelinePage /> },
            { path: 'python-developer-guideline', element: <PythonDeveloperGuidelinePage /> },
            { path: 'flutter-developer-guideline', element: <FlutterDeveloperGuidelinePage /> },
            { path: 'clean-architecture', element: <CleanArchitecturePage /> },
            { path: 'coding-standard', element: <CodingStandardPage /> },
            { path: 'github-axa-usage', element: <GitHubAxaUsagePage /> },
            { path: 'openshift-guideline', element: <OpenShiftGuidelinePage /> },
            { path: 'jenkins-guideline', element: <JenkinsGuidelinePage /> },
            { path: 'sonarqube-guideline', element: <SonarQubeGuidelinePage /> },
            { path: 'clean-code-guideline', element: <CleanCodeGuidelinePage /> },
            { path: 'finops-guideline', element: <FinOpsGuidelinePage /> },
            { path: 'aws-architecture-guideline', element: <AWSArchitectureGuidelinePage /> },
            { path: 'search', element: <SearchResultsPage /> },
        ]
    },
];
