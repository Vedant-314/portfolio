import { Button, Form, Input } from "antd";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Resend } from "resend";

function Emails() {
  const form = useRef();
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9jobl1m",
        "template_k4lzyi8",
        form.current,
        "TFyCc7z25BkoGP63D"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <div className="form">
        <div className="email-title">
          <h2>Enquiries</h2>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-item">
            <label>Name: </label>
            <input type="text" name="user_name" required />
          </div>
          <div className="form-item">
            <label>Email: </label>
            <input type="email" name="user_email" required />
          </div>
          <div className="form-item">
            <label>Query: </label>
            <textarea name="message" required />
          </div>
          <div className="submit">
            <input type="submit" value="Send" />
          </div>
        </form>

        {/* <Form ref={form} className="form-data" onFinish={sendEmail} {...formItemLayout} variant="filled">
          <Form.Item
            label="Name"
            name="user_name"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="user_mail"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Query/Feedback"
            name="message"
            rules={[
              {
                required: true,
                message: "Please enter query!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 12,
            }}
          >
            <Button type="primary" className="btn" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form> */}
      </div>
    </div>
  );
}

export default Emails;
