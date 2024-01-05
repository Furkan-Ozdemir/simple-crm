/* eslint-disable react/prop-types */
import Email from "../Email/Email";
import "./EmailList.scss";

export default function EmailList({
  searchTerm,
  setEmailBody,
  setTopic,
  setName,
}) {
  const emails = [
    {
      name: "Furkan Özdemir",
      topic: "Applying for a job in Rutilea",
      email: "ozthefur@gmail.com",
      body: "Hey there, I would like to work with you !",
    },
    {
      name: "Tsugumi Ohba",
      topic: "New Anime Incoming",
      email: "a@b.com",
      body: " Hello, I am working on Death Note 2. Which will be longer that the first version. If you are interested follow me on Instagram",
    },
    {
      name: "株式会社RUTILEA 採用担当",
      topic: "You are hired",
      email: "recruit@rutilea.jobcan",
      body: "Congratulations, you are hired !",
    },
    {
      name: "John Doe",
      topic: "Project Collaboration",
      email: "john.doe@example.com",
      body: "Hi, I came across your profile and would like to discuss a potential collaboration on a new project. Let me know if you're interested!",
    },
    {
      name: "Jane Smith",
      topic: "Meeting Tomorrow",
      email: "jane.smith@example.com",
      body: "Hello, we have a meeting scheduled for tomorrow at 2 PM. Please make sure to prepare the necessary materials. Thank you!",
    },
    {
      name: "Alex Johnson",
      topic: "Product Launch",
      email: "alex.johnson@example.com",
      body: "Hey, we are planning to launch a new product next month. I'd like your input on the marketing strategy. Can we set up a meeting to discuss this further?",
    },
    {
      name: "Eva Martinez",
      topic: "Collaboration Opportunity",
      email: "eva.martinez@example.com",
      body: "Hi, I represent a startup in the tech industry and we're looking for collaborators for our new project. Your skills seem to align perfectly. Let's discuss the details!",
    },
    {
      name: "Chris Anderson",
      topic: "Invitation to Tech Conference",
      email: "chris.anderson@example.com",
      body: "Dear [Your Name], we would like to invite you as a speaker to our upcoming tech conference. Your expertise in [Your Field] would be invaluable. Let us know if you're interested!",
    },
    {
      name: "Sarah Thompson",
      topic: "Web Development Project",
      email: "sarah.thompson@example.com",
      body: "Hello, I'm reaching out to discuss a web development project. We are impressed with your portfolio and would like to explore collaboration. Can we schedule a meeting to discuss the details?",
    },
    {
      name: "David Brown",
      topic: "Conference Speaker Invitation",
      email: "david.brown@example.com",
      body: "Dear [Your Name], we are organizing a prestigious conference on [Conference Theme] and would like to invite you as a keynote speaker. Your insights would greatly contribute to the event. Please let us know your availability.",
    },
    {
      name: "Amanda White",
      topic: "Marketing Proposal",
      email: "amanda.white@example.com",
      body: "Hi, we're interested in your marketing services for our upcoming product launch. Could you please provide a detailed proposal outlining your strategy and pricing? We're looking forward to hearing from you.",
    },
    {
      name: "Michael Rodriguez",
      topic: "Job Interview Confirmation",
      email: "michael.rodriguez@example.com",
      body: "Dear [Your Name], we are pleased to confirm your job interview for the [Job Position] at our company. Please bring a copy of your resume and be prepared to discuss your experience and skills. Looking forward to meeting you!",
    },
    {
      name: "Sophia Lee",
      topic: "Collaboration in AI Research",
      email: "sophia.lee@example.com",
      body: "Hello, I'm working on an AI research project and would like to collaborate with experts in the field. Your research background aligns with our goals. Could we schedule a meeting to explore potential collaboration?",
    },
  ];
  const filteredEmails = emails.filter((email) =>
    email.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="emailList">
      {filteredEmails.map((email, index) => (
        <Email
          key={index}
          name={email.name}
          topic={email.topic}
          email={email.email}
          setEmailBody={setEmailBody}
          body={email.body}
          setTopic={setTopic}
          setName={setName}
        />
      ))}
    </div>
  );
}
