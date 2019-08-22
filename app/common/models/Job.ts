import gql from "graphql-tag";
import { DefaultModel, Model } from "./Model";

export class Job extends DefaultModel implements Model {
  id: number;
  create = gql`
    mutation create($phone: String, $firstName: String, $lastName: String) {
      createClient(
        input: {
          client: { phone: $phone, firstName: $firstName, lastName: $lastName }
        }
      ) {
        client {
          id
          phone
          firstName
          lastName
        }
      }
    }
  `;
  delete: () => void;
  update: () => void;
}
