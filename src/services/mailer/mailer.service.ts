import { Request, Response } from 'express';
import templates from './templates';
import nodemailer from 'nodemailer';

function useTemplate(template:string, props:any):string {
  const templateFunction = templates[template as keyof typeof templates] as unknown as Function || undefined;
  return templateFunction ? templateFunction(props) : '';
}

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = process.env.SMTP_PORT || 587;
const SMTP_SECURE = process.env.SMTP_SECURE || false;
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || ''
const defaultReciever = process.env.DEFAULT_RECIEVER || '';
const defaultSender = process.env.DEFAULT_SENDER || '';

const mailer = async (req:Request, res:Response) => {
  try {
    const { to, subject, text, template } = req.body;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      }
    } as any);

    let info = await transporter.sendMail({
      from: defaultSender,
      to: to || defaultReciever,
      subject: subject || 'Hello ✔',
      html: template ? useTemplate(template, req.body) : text || '<b>Hello world?</b>'
    });

    res.json({
      success: true,
      message: "Mail sent successfully",
      info
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

export default mailer;
