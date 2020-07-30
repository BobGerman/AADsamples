# Calling the Microsoft Graph from your Teams application

This section will help you get started calling the Microsoft Graph and other Azure Active Directory secured API's from your Teams application.

[Microsoft Graph](https://docs.microsoft.com/en-us/graph/overview) is the primary API for Microsoft 365 and for Microsoft Teams. It provides a single REST endpoint, https://graph.microsoft.com/, that can access data and insights across Microsoft 365 services.  including Microsoft Teams and other services used by Teams such as SharePoint Online, Exchange Online, and Planner. You can check out the Graph in action using the [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer).

Many Microsoft Teams applications need to call the Graph to access user profiles, files, calendars, or even for simple things like querying the Team's channels or posting a message. In order to call the Graph, however, you need an access token from Azure Active Directory which establishes your authorization. The method for obtaining that token varies depending on the type of application feature(s) you're building; for example a tab implemented as a Single Page Application will get an access token differently than a Bot.

## What is Azure Active Directory?

Azure Active Directory (Azure AD) is the identity service used by Office 365 and a number of other Microsoft products. Be sure not to confuse Azure AD with other, similarly named services:

 * [Azure Access Control Service](https://docs.microsoft.com/en-us/previous-versions/azure/azure-services/hh147631(v=azure.100)) (Azure ACS): This service predates Azure AD and is still used by [SharePoint Add-ins](https://developer.microsoft.com/en-us/office/blogs/impact-of-azure-access-control-deprecation-for-sharepoint-add-ins/), but has otherwise been [retired](https://azure.microsoft.com/en-us/blog/one-month-retirement-notice-access-control-service/). 
 * [Azure AD B2C](https://azure.microsoft.com/en-us/services/active-directory/external-identities/b2c/): Despite the similar name, this is a completely different identity service used to federate with consumer identity services such as Google and Facebook. It doesn't work with Office 365 identities and can't be used to obtain an access token for calling the Graph.
 * 

## App Registration

## Azure Active Directory Applications and Permissions

