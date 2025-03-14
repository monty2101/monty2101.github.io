type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Shivanshu Dhaiya — Portfolio",
    fullName: "Shivanshu Dhaiya",
    email: "shivanshudhaiyaa@mail.com",
  },
  hero: {
    name: "Shivanshu",
    p: ["I craft intuitive user experiences", "and design elegant interfaces."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a passionate UI/UX designer with a strong foundation in creating
       intuitive, visually compelling, and user-friendly digital experiences. 
       Proficient in Figma, I specialize in designing scalable design systems, 
       wireframes, and high-fidelity prototypes that enhance user engagement. 
       I thrive in collaborative environments, working closely with developers, 
       product managers, and stakeholders to craft seamless user journeys. 
       Let's work together to build impactful, human-centered designs!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Skills",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories . It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
