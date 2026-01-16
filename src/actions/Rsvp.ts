"use server";

import { createAirtableRecord } from "../lib/AirTableConfig";

export async function submitRSVP(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    throw new Error("Email is required");
  }

  await createAirtableRecord(process.env.AIRTABLE_TABLE_NAME!, {
    Email: email,
  });

  return;
}
