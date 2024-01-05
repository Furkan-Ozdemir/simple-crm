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
