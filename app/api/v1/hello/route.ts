import { NextResponse } from "next/server";

type Data = {
  name: string;
};

export async function GET(req: Request, res: Response) {
  return NextResponse.json({ name: "John Doe" } satisfies Data, {
    status: 200,
    statusText: "OK",
  });
}
