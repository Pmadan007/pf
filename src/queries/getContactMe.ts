import datoCMSClient from './datoCMSClient';
import { ContactMe } from '../types';

const GET_CONTACT_ME = `
  query {
    contactme {
      profilepicture {
        url
      }
      name
      title
      summary {
        value
      }
      companyuniversity
      linkedinlink
      email
      phonenumber
    }
  }
`;

export async function getContactMe(): Promise<ContactMe> {
  const data = await datoCMSClient.request<{ contactme: ContactMe }>(GET_CONTACT_ME);
  return data.contactme;
}
