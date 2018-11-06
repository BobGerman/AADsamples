using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Clients.ActiveDirectory;

namespace SPConsoleApp
{
    public static class AuthHelper
    {
        private static string ClientId = "<clientID>";
        private static string Cert = "myCert.pfx";
        private static string CertPassword = "<certPassword>";
        private static string Authority = "https://login.windows.net/<tenant>.onmicrosoft.com/";
        private static string Resource = "https://<tenant>.sharepoint.com/";

        public async static Task<string> GetToken()
        {
            var authenticationContext = new AuthenticationContext(Authority, false);

            var certPath = Path.Combine("..\\..\\", Cert);
            var cert = new X509Certificate2(System.IO.File.ReadAllBytes(certPath),
            CertPassword,
            X509KeyStorageFlags.Exportable |
            X509KeyStorageFlags.MachineKeySet |
            X509KeyStorageFlags.PersistKeySet);

            var authenticationResult = await authenticationContext.AcquireTokenAsync(Resource, new ClientAssertionCertificate(ClientId, cert));
            var token = authenticationResult.AccessToken;

            return token;
        }
    }
}
