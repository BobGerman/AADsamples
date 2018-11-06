using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System.IO;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace SPConsoleApp
{
    public static class AuthHelper
    {
        public async static Task<string> GetToken()
        {
            var authenticationContext = new AuthenticationContext(Config.Authority, false);

            var certPath = Config.Certfilepath;
            var cert = new X509Certificate2(System.IO.File.ReadAllBytes(certPath),
            Config.CertPassword,
            X509KeyStorageFlags.Exportable | X509KeyStorageFlags.MachineKeySet | X509KeyStorageFlags.PersistKeySet);

            var authenticationResult = await authenticationContext.AcquireTokenAsync(
                Config.Resource,
                new ClientAssertionCertificate(Config.ClientId, cert));
            var token = authenticationResult.AccessToken;

            return token;
        }
    }
}
