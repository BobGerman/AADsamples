# Calling the Microsoft Graph from your Teams application - Part 1: Introduction and Concepts

Microsoft Teams applications almost always need to call the Graph API, yet it's not as easy as just calling a REST service. Most of the complexity has to do with getting an access token, which is required on every Graph call to establish what, if anything, the caller is authorized to do. 

Getting the access token requires an understanding of Teams, Azure AD, Graph, and sometimes other components like the SharePoint Framework or Bot Framework, yet each of these is documented separately and each one assumes the reader knows all the others. I literally get questions every day from frustrated developers trying to figure this out! (Yesterday I got 3!)

I'm working with my colleague [Ayça Baş](https://dev.to/aycabs) to help by publishing articles and code samples that explain how to call Graph from a Teams app. Here's what we have so far:

1. Introduction (this article)
2. [Concepts](02-Concepts.md) - The concepts common to all the scenarios
3. [Calling Graph from a Teams tab using Azure AD SSO](#)
4. [Calling Graph from a Teams tab using Graph Toolkit](https://dev.to/aycabs/handling-authentication-in-custom-teams-tabs-using-microsoft-graph-toolkit-53i8)
5. [Calling Graph from a Teams Tab using SharePoint Framework](#)
6. [Calling Graph from a Teams Tab using a browser pop-up](#)

More sections that are on the backlog, in rough priority order (comments please!):

6. Calling Graph from a Teams Bot using the Bot Framework Auth Dialog
7. Calling Graph with elevated permission from a Teams Bot using Client Credentials Flow
8. Calling Graph from a Teams messaging extension
9. Using Azure Functions to call Graph with elevated permission from a Teams tab

Ayça and I are new to Developer Advocacy and haven't learned all the ropes of publishing something official, so consider these articles a draft of some future documentation. If and when we do something official, I'll post it here. Meanwhile, please send feedback so we can get it right!

