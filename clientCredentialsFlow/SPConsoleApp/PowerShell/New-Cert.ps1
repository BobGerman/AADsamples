# Command to generate the cert
New-SelfSignedCertificate -KeyExportPolicy Exportable `
 -Provider "Microsoft Strong Cryptographic Provider" `
 -Subject "CN=<application name>" `
 -NotBefore (Get-Date) `
 -NotAfter (Get-Date).AddYears(2) `
 -CertStoreLocation "cert:\CurrentUser\My" `
 -KeyLength 2048

# Command to extract the values
$cert = New-Object
System.Security.Cryptography.X509Certificates.X509Certificate2
"(full path to the exported .cer file)"
"customKeyIdentifier: $([System.Convert]::ToBase64String($cert.GetCertHash()))"
"endDate: $($cert.NotAfter.ToString(""s""))Z"
"keyId: $([System.Guid]::NewGuid().ToString())"
"startDate: $($cert.NotBefore.ToString(""s""))Z"
"value: $([System.Convert]::ToBase64String($cert.GetRawCertData()))"

