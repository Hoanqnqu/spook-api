import type { ServiceAccount } from 'firebase-admin';
import * as firebaseAdmin from 'firebase-admin';

export const FirebaseProvider = {
  provide: 'FIREBASE_APP',
  useFactory: () => {
    const config = {
      type: 'service_account',
      project_id: 'ligsetin',
      private_key_id: '8af41bd1920646e9bfddf35ac0b8ba3831877b35',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCr1n2fndMnhTMy\nyn/qsau9Guhy2Tqb7OUBOOh3TSD0UFbh6oginOwiHfy+V0U6b+1S4dY4AEXWMGEy\nJULPADaPUjuUf4My70hTLrfyhfYbEpTldvzeqegtz4Z2ZfxzeKyNKI2ICu1D+pIs\n7eiMWxF6LZHLxUsjVa/oQ8aMcrLQYrDOHBQS/4clkSj2xwFXP5cA+HmaygxtsRna\nf5etnz3wDQn0TFsOCv5jCdOdHeqbrJaOJZqsPWtRanAWFioT7N3qSflI4XwdPP7e\nelDK+XXRgKVD5M05u5T7WKBnvsNs5mp8BUlND4DKjKH5cFUaVDCjpmFZiC+saIk7\nwox3kwi3AgMBAAECggEADeAoDLeF0W8kDzni0mS+ZWrC0mNQJD8gztR1kQydWJ0U\nJvH1RDY/qxGY0xXg9TMMiuDJl4QOH5mQf6gamPR/c1tEjF0vjvFbebwQBnliwhTi\nCRVundxCb1COnwjlNb3M0SkxJIcdWZvmKdKcMJk59A+x8i5gPt4wciTm53hrkAAG\nL+UdIEXudSKqFFG9d3Ve2jZyQgyJl8E51SJSYCu1oGk9jUYQtlZ8/uIU7TVW4ttW\n8YJDWKMU6oH1RBxESOIaJv5MmWBWme0YEstXcRA+TrfqSul21eOyRZmWPeEy/+yh\nSK1wndqz+5DWr93A7Z/3SR8hJMudJNEpCx4WJGa2oQKBgQDesQWAGLrU/WiO6hXl\nFiWvKeof0KQ4iyhODDtSk99Z6szFDyB+PfvxN6BgOCA3I6AmCIROi68HkYRw8iqh\nt53GACYd2gKlV+7lzV3viBBH4nBwEwtFSU9pB6UTl+Q1QtL67gUia7DIBifb41pC\nKlW5lcniXXFMjDgmnTTDy5y1wwKBgQDFikF8TbZXc2Ask/TxPUmWlyNrX8f/aH5F\nNZaH7k4Gpq8+MdDSWCCxMN/huT9K+Dst6sWiSad4LwWMS4NpJsmgFdlhKDKgGCM8\n3qLBBirOZS8eaiMrekPqfIMuzALCve1zjg/0zE+7wN704QvHsjlwOqLqxISzgQVW\nm+MOZ52N/QKBgQDPE/G3ckeZ86Mc8lQ12OhmACX0O8HZyp1KJlmrqlIRfSO5Qx3G\nBsGXR1Dc6JQccgZkF5tgpse10/1CQg6enu4Zxt2q+KVpN2GxU808BlyNW+WOckcS\nwN8VHcTFeYL+fAtQx7EClv2mowLBmKK/0Doy/zTiSF4o/mLglWMRhu9MnQKBgGbs\nDAaZ7uFNidRwGnT+u7KseJXfR7L5XKDutMmKDjlE65V6GxUdOZtYna1b+XA0OZFI\n+0P9IDZsOXXJemR1AyRXffUzHn1vVhzG2wG7Ft6GtbAhGMX0ZCJuUWM2hFG251sH\nr6SaNwjaCtCH2L1pTKf+xReQ4JsuI/vmKL0+m0Z5AoGARiU58r2BgVXd+ACnx2zJ\njWkwiY9rG+MIwfHbMu6SpehZun/Rv3I4hCaq0NQDhm65xlpShZPZM0RZH1DldpCJ\nuqI7ciIxk+jekRcoQZR7pl47T/BF/QMBLdanjVb7Rxy4I//6ycCsxj1Lkb368QRi\nBplZFwTog0yMfWq9A0DXn+Y=\n-----END PRIVATE KEY-----\n',
      client_email: 'firebase-adminsdk-t5d4r@ligsetin.iam.gserviceaccount.com',
      client_id: '107534864345090716588',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-t5d4r%40ligsetin.iam.gserviceaccount.com',
      universe_domain: 'googleapis.com',
    } as ServiceAccount;
    return firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(config),
    });
  },
};
