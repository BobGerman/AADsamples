namespace SPConsoleApp
{
    // Copy this to a new file, Config.cs, and rename the class to simply Config
    // Then fill in your application details
    public class SampleConfig
    {
        internal const string ClientId = "<your app ID>";
        internal const string Certfilepath = "<relative path to your certificate .pfx file containing private key";
        internal const string CertPassword = "<password to your cert file>";
        internal const string Authority = "https://login.windows.net/<tenant>.onmicrosoft.com/";
        internal const string Resource = "https://<tenant>.sharepoint.com/";
    }
}
