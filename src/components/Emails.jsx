import { Button, Form, Input } from "antd";
import { Resend } from "resend";

function Emails() {
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

  const resend = new Resend("re_55yWMkRJ_CRyMVvEWYCqS5xvAjfvvUWMU");
  const onFinish = async ({ name, mail, query }) => {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vedanttaak7@gmail.com",
      subject: mail,
      html: name + query,
    });
  };

  return (
    <div className="form-container">
      <div className="form">
        <div className="email-title">
          <h2>Enquiries</h2>
        </div>
          <hr/>

        <Form className="form-data" onFinish={onFinish} {...formItemLayout} variant="filled">
          <Form.Item
            label="Name"
            name="name"
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
            name="mail"
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
            name="query"
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
        </Form>
      </div>
    </div>
  );
}

export default Emails;
