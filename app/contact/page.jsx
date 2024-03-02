import ImageNext from "next/image";

import styles from "./Contact.module.css";
import images from "@/public/assets";
import Form from "@/components/Form/Form";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Contact",
  description: "Blogs app contact with next app",
};

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.section__left}>
        <div className={styles.image}>
          <ImageNext src={images.contact.src} alt={images.contact.alt} fill />
        </div>
      </div>

      <div className={styles.section__right}>
        <Form title="Information contact" action="" className={styles.form}>
          <Input
            type="text"
            name="username"
            placeholder="Enter your username here..."
            primary
            large
            borderRadius
          />
          <Input
            type="text"
            name="email"
            placeholder="Enter your email here..."
            primary
            large
            borderRadius
          />
          <Input
            type="text"
            name="phone"
            placeholder="Enter your phone number here..."
            primary
            large
            borderRadius
          />
          <Textarea
            name="address"
            placeholder="Enter your address here..."
            rows={10}
            primary
            large
            borderRadius
          ></Textarea>
          <Button primary large borderRadius className={styles.btn}>
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactPage;
