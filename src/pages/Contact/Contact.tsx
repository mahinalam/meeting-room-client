import { Collapse, Divider } from "antd";
import "antd/dist/reset.css"; // Import Ant Design styles

const { Panel } = Collapse;
const ContactUs = () => {
  return (
    <div className="bg-white ">
      {/* Contact Header */}
      <div className="text-center pt-12">
        <h1 className="md:text-3xl text-2xl font-bold">
          Contact our friendly team
        </h1>
        <p className="mt-4 md:text-lg text-base">
          Let us know how we can help.
        </p>
      </div>
      <Divider />
      {/* Contact Options */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 my-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
          <h2 className="md:text-xl text-lg font-semibold mt-4 text-blue-900">
            Chat to sales
          </h2>
          <p className="text-center mt-2">Speak to our friendly team.</p>
          <a
            href="mailto:sales@yourdomain.com"
            className="mt-2 text-blue underline text-btn-primary"
          >
            sales@yourdomain.com
          </a>
        </div>

        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 my-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
          <h2 className="md:text-xl text-lg font-semibold mt-4 text-blue-900">
            Chat to support
          </h2>
          <p className="text-center mt-2">We’re here to help.</p>
          <a
            href="mailto:support@yourdomain.com"
            className="mt-2 text-btn-primary underline"
          >
            support@yourdomain.com
          </a>
        </div>

        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 my-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <h2 className="md:text-xl text-lg font-semibold mt-4 text-blue-900">
            Visit us
          </h2>
          <p className="text-center mt-2">Visit our office HQ.</p>
          <a
            href="https://goo.gl/maps/yourlocation"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-btn-primary underline"
          >
            View on Google Maps
          </a>
        </div>

        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 my-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <h2 className="md:text-xl text-lg font-semibold mt-4 text-blue-900">
            Call us
          </h2>
          <p className="text-center mt-2">Mon-Fri from 8am to 5pm.</p>
          <a
            href="tel:+15550000000"
            className="mt-2 text-btn-primary underline"
          >
            +1 (555) 000-0000
          </a>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-16 px-4">
        <h2 className="md:text-3xl text-2xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Collapse
          style={{ background: "none" }}
          accordion
          className=" rounded-lg shadow-lg border-0 "
        >
          <Panel
            className="text-lg font-semibold p-2"
            header="Is there a free trial available?"
            key="1"
          >
            <p className="text-base text-gray-600 font-medium">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free 30-minute onboarding call to get you up
              and running. Book a call here.
            </p>
          </Panel>
          <Panel
            className="text-lg font-semibold p-2"
            header="Is there a free trial available?"
            key="2"
          >
            <p className="text-base text-gray-600 font-medium">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free 30-minute onboarding call to get you up
              and running. Book a call here.
            </p>
          </Panel>
          <Panel
            className="text-lg font-semibold p-2"
            header="Is there a free trial available?"
            key="3"
          >
            <p className="text-base text-gray-600 font-medium">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free 30-minute onboarding call to get you up
              and running. Book a call here.
            </p>
          </Panel>
        </Collapse>
      </div>
      <section>
        <h2 className="md:text-3xl my-10 text-2xl font-semibold text-center ">
          Find Our Location
        </h2>
        <div className="md:w-3/4 w-full mx-auto h-64 bg-gray-300 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.953736315678!3d-37.81627944202169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b4c7f2eb30b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1632232923456!5m2!1sen!2sau"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
