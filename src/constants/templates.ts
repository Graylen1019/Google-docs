export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
        <h1 >Software Proposal</h1>
    
        <h2 >To:</h2>
        <p>[Recipient Name or Company Name]</p>
        <p>[Recipient Address]</p>
        <p>[Recipient City, State, ZIP]</p>

        <h2 >From:</h2>
        <p>[Your Name or Company Name]</p>
        <p>[Your Address]</p>
        <p>[Your City, State, ZIP]</p>
        <p>[Your Email]</p>
        <p>[Your Phone]</p>
        <p>[Date]</p>

        <h2 >Subject: [Project Name] - Software Proposal</h2>

        <h2 >1. Introduction</h2>
        <p>[Provide a brief overview of the proposed software project. Clearly and concisely describe the main goals, objectives, and the intended outcome.  ]</p>

        <h2 >2. Project Description</h2>
        <p>
            [Describe your proposed software project in detail. Explain how the
            software will address the client’s needs.  Describe the main features,
            and functionalities. Explain why your solution is the best approach.
            Use clear and non-technical language where possible, but include
            technical details as needed.]
        </p>

        <h2 >3. Scope of Work</h2>
        <p>
            [Clearly outline the scope of the software project.  Describe the tasks, deliverables, and boundaries of the project.  Specify what is included and excluded.  ]
        </p>

        <h2 >4. Project Timeline</h2>
        <p>    [Provide a detailed project timeline, including key milestones,
            deliverables, and deadlines. Use a Gantt chart or a table if
            necessary to visually represent the schedule. Be realistic and
            account for potential risks and contingencies.]
        </p>

        <h2 >5. Cost Estimate</h2>
        <p>
             [Provide a detailed breakdown of the project costs, including labor,
            materials, and any other expenses. Specify the pricing model (e.g.,
            fixed price, time and materials). Clearly state what is included in
            the price and what is not. Explain any payment terms and
            conditions.]
        </p>

        <h2 >6. Conclusion</h2>
        <p>[Summarize the proposal and reiterate the value proposition.  State the next steps and call to action.]</p>
    `,
  },
  {
    id: "project proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
        <h1 >Project Proposal</h1>
    
        <h2 >To:</h2>
        <p>[Recipient Name or Company Name]</p>
        <p>[Recipient Address]</p>
        <p>[Recipient City, State, ZIP]</p>

        <h2 >From:</h2>
        <p>[Your Name or Company Name]</p>
        <p>[Your Address]</p>
        <p>[Your City, State, ZIP]</p>
        <p>[Your Email]</p>
        <p>[Your Phone]</p>
        <p>[Date]</p>

        <h2 >Subject: [Project Name]</h2>

        <h2 >1. Introduction</h2>
        <p>[Provide a brief overview of the proposed project. Clearly and concisely describe the main goals, objectives, and the intended outcome.  ]</p>

        <h2 >2. Project Description</h2>
        <p>
            [Describe your proposed project in detail. Explain how the
            project will address the client’s needs.  Describe the main features,
            and functionalities. Explain why your solution is the best approach.
            Use clear and non-technical language where possible, but include
            technical details as needed.]
        </p>

        <h2 >3. Scope of Work</h2>
        <p>
            [Clearly outline the scope of the project.  Describe the tasks, deliverables, and boundaries of the project.  Specify what is included and excluded.  ]
        </p>

        <h2 >4. Project Timeline</h2>
        <p>    [Provide a detailed project timeline, including key milestones,
            deliverables, and deadlines. Use a Gantt chart or a table if
            necessary to visually represent the schedule. Be realistic and
            account for potential risks and contingencies.]
        </p>

        <h2 >5. Cost Estimate</h2>
        <p>
             [Provide a detailed breakdown of the project costs, including labor,
            materials, and any other expenses. Specify the pricing model (e.g.,
            fixed price, time and materials). Clearly state what is included in
            the price and what is not. Explain any payment terms and
            conditions.]
        </p>

        <h2 >6. Conclusion</h2>
        <p>[Summarize the proposal and reiterate the value proposition.  State the next steps and call to action.]</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
        <h1 >[Your Company Name]</h1>
        <p>[Your Address]</p>
        <p>[Your City, State, ZIP]</p>
        <p>[Your Email]</p>
        <p>[Your Phone]</p>
        <p>[Date]</p>

        <p>[Client Name]</p>
        <p>[Client Company]</p>
        <p>[Client Address]</p>
        <p>[Client City, State, ZIP]</p>

        <h2 >Subject: Project Proposal - [Project Name]</h2>

        <h2 >Dear [Client Name],</h2>

        <p>Thank you for considering [Your Company Name] for your project. We are excited about the opportunity to work with you and help you achieve your goals.</p>

        <p>We are confident that our team's expertise and experience will ensure the successful completion of this project. We are committed to providing you with the highest quality of service and exceeding your expectations.</p>

        <p>Thank you for your time and consideration. We look forward to the opportunity to discuss this proposal further and answer any questions you may have.</p>

        <h2 >Sincerely,</h2>
        <p>[Your Name]</p>
        <p>[Your Title]</p>
        <p>[Your Company Name]</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
        <h1 >[Your Name]</h1>
        <p>[Your Address]</p>
        <p>[Your City, State, ZIP]</p>
        <p>[Your Email]</p>
        <p>[Your Phone]</p>

        <h2 >Summary</h2>
        <p>[A brief summary of your skills and experience]</p>

        <h2 >Experience</h2>
        <h3>[Job Title]</h3>
        <p>[Company Name]</p>
        <p>[Dates of Employment]</p>
        <ul>
            <li>[Responsibility 1]</li>
            <li>[Responsibility 2]</li>
        </ul>

        <h3>[Job Title]</h3>
        <p>[Company Name]</p>
        <p>[Dates of Employment]</p>
        <ul>
            <li>[Responsibility 1]</li>
            <li>[Responsibility 2]</li>
        </ul>

        <h2 >Education</h2>
        <h3>[Degree]</h3>
        <p>[University Name]</p>
        <p>[Dates of Attendance]</p>

        <h2 >Skills</h2>
        <ul>
            <li>[Skill 1]</li>
            <li>[Skill 2]</li>
            <li>[Skill 3]</li>
        </ul>

        <h2 >Awards and Publications (Optional)</h2>
        <p>[List any awards or publications]</p>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <h1 >[Your Name]</h1>
      <p>[Your Address]</p>
      <p>[Your City, State, ZIP]</p>
      <p>[Your Email]</p>
      <p>[Your Phone]</p>
      <p>[Date]</p>

      <p>[Hiring Manager Name] (If known, otherwise use title)</p>
      <p>[Hiring Manager Title]</p>
      <p>[Company Name]</p>
      <p>[Company Address]</p>
      <p>[Company City, State, ZIP]</p>

      <h2 >Dear [Mr./Ms./Mx. Last Name],</h2>

      <p>I am writing to express my enthusiastic interest in the [Job Title] position at [Company Name]. I have been closely following [Company Name]'s work in [Industry/Specific Area] for some time, and I am impressed by [Mention something specific you admire about the company].</p>

      <p>My [Number] years of experience in [Relevant Field] have equipped me with the skills and knowledge necessary to excel in this role. In my previous position at [Previous Company Name], I was responsible for [ Briefly describe 1-2 key responsibilities and accomplishments that align with the job description]. For example, I [Quantify a significant achievement using numbers or data].</p>

      <p>I am particularly drawn to [Company Name]'s [Mention something specific about the company culture, values, or mission that resonates with you]. My skills in [List 2-3 key skills] align perfectly with the requirements outlined in the job description, and I am confident I can make a significant contribution to your team.</p>

      <p>I am eager to learn more about this opportunity and discuss how my skills and experience can benefit [Company Name]. Thank you for your time and consideration. I have attached my resume for your review and look forward to hearing from you soon.</p>

      <h2 >Sincerely,</h2>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: ` 
        <h1 >[Your Name or Company Name]</h1>
        <p>[Your Address]</p>
        <p>[Your City, State, ZIP]</p>
        <p>[Your Email]</p>
        <p>[Your Phone]</p>
        <p>[Date]</p>

        <p>[Recipient Name or Company Name]</p>
        <p>[Recipient Address]</p>
        <p>[Recipient City, State, ZIP]</p>

        <h2 >Dear [Mr./Ms./Mx. Last Name or To Whom It May Concern],</h2>

        <p>[Start with a professional greeting.  If you know the recipient's name, use it.  If not, use a general greeting.]</p>

        <p>[State the purpose of your letter. Be clear and concise. Provide context if necessary.]</p>

        <p>[Provide details and supporting information.  Organize this section logically.  Use paragraphs to separate different points.  Be specific and avoid vague language. If this is a proposal, include key information, but you may want to refer to a longer proposal document.]</p>

        <p>[Conclude your letter.  State the action you would like the recipient to take (e.g., schedule a meeting, provide information, make a decision).  Express your gratitude or reiterate your interest.  Provide your contact information if it's not already at the top.]</p>

        <h2 >Sincerely,</h2>
        <p>[Your Name]</p>
        <p>[Your Title (if applicable)]</p>
`,
  },
];
