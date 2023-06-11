import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "d9i2yb54",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-06-11",
});
