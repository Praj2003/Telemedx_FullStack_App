import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function POST(req: Request) {
  try {
    const {
      patientName,
      contactNumber,
      address,
      preferredDate,
      email,
      doctor,
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

    if (!patientName || !contactNumber || !address || !preferredDate) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const appointmentBooking = await prisma.appointmentBooking.create({
      data: {
        patientName: patientName,
        contactNumber: contactNumber,
        address: address,
        doctorAttending: doctor,
        preferedDate: new Date(preferredDate),
        userEmail: email,
      },
    });

    return NextResponse.json(
      { Message: "Doctor Appointment booking has been successfully done" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
