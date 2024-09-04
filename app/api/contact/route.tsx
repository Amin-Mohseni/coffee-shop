import connectToDB from "@/configs/db";
import contactModel from "@/models/Contact";
import {
  validateCompany,
  validateEmail,
  validateMessage,
  validatePhoneNumber,
  validateUsername,
} from "@/utils/auth";

async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();

    const { phone, email, name, company, message } = body;
    const isValidPhone = validatePhoneNumber(phone);
    const isValidEmail = validateEmail(email);
    const isValidName = validateUsername(name);
    const isValidCompany = validateCompany(company);
    const isValidMessage = validateMessage(message);

    if (!isValidPhone) {
      return Response.json(
        { message: "Phone is not Valid !" },
        { status: 419 }
      );
    }
    if (!isValidEmail) {
      return Response.json(
        { message: "Email is not Valid !" },
        { status: 419 }
      );
    }
    if (!isValidName) {
      return Response.json({ message: "Name is not Valid !" }, { status: 419 });
    }
    if (!isValidCompany) {
      return Response.json(
        { message: "Company is not Valid !" },
        { status: 419 }
      );
    }
    if (!isValidMessage) {
      return Response.json(
        { message: "Message is not Valid !" },
        { status: 419 }
      );
    }

    await contactModel.create({ phone, email, name, company, message });

    return Response.json(
      { message: "Message saved successfully !" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
