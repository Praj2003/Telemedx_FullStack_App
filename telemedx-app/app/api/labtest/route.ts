import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const {
      patientName,
      contactNumber,
      address,
      selectedTest,
      preferredDate,
      email,
    } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "User not found in database" },
        { status: 404 }
      );
    }

    if (
      !patientName ||
      !contactNumber ||
      !address ||
      !selectedTest ||
      !preferredDate
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const booking = await prisma.labTestBooking.create({
      data: {
        patientName: patientName,
        contactNumber: contactNumber,
        address: address,
        testType: selectedTest,
        preferedDate: new Date(preferredDate),
        userEmail: existingUser.email
      },
    });

    return NextResponse.json(
      { Message: "Labtest booking has been successfully done" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
