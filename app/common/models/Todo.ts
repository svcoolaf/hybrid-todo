import gql from "graphql-tag";
import { Model } from "./Model";

export class Todo implements Model {
  static create = gql`
    mutation create($content: String) {
      createJob(input: { job: { content: $content } }) {
        job {
          id
          content
        }
      }
    }
  `;
  static update = gql`
    mutation update($id: Int!, $content: String, $complete: Boolean) {
      updateJobById(
        input: { id: $id, jobPatch: { complete: $complete, content: $content } }
      ) {
        job {
          id
        }
      }
    }
  `;
  static delete = gql`
    mutation delete($id: Int!) {
      deleteJobById(input: { id: $id }) {
        job {
          id
        }
      }
    }
  `;
  static getAll = gql`
    {
      allJobs {
        nodes {
          id
          content
          complete
        }
      }
    }
  `;
  id: number;
  content: string;
  complete: boolean;
}
