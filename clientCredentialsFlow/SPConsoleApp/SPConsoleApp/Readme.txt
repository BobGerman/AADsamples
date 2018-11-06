Put your PFX file in the same folder with Program.cs

Here's an example of KeyCredentials:

  "keyCredentials": [{
    "customKeyIdentifier": "+9gMFtEjXOQip8oRXVC734mUgA4=",
    "keyId": "53c5458d-3cd5-4037-af30-bfdaefa904ff",
    "usage": "verify",
    "type": "AsymmetricX509Cert",
    "value": "<reallyLong>"
  }],

  The PowerShell folder includes the commands I used to generate the cert and extract the values

