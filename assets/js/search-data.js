// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-resume",
    title: "Resume",
    section: "Navigation",
    handler: () => {
      window.location.href = "/portfolio/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A comprehensive portfolio demonstrating the synergy between automation engineering and data analytics. This collection features projects that digitize manual processes, automate complex workflows, and enable real-time data insights. From reporting systems using Power BI, SQL, and advanced DAX modeling, to end-to-end process automation with Power Automate, PowerApps, and AI tools, each project showcases high-impact solutions designed to optimize operations, reduce manual workload, and empower decision-making. Additionally, this portfolio includes industrial automation work with Laser Guided Vehicles (LGVs), smart navigation systems, and robotics logic programming, reflecting hands-on experience in logistics and manufacturing environments. Divided into two key sections—Reporting &amp; Analytics and Automation &amp; Robotics—these projects highlight my problem-solving mindset, business awareness, and ability to streamline operations across both corporate and industrial sectors.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/repositories/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-safety-scoreboard-tracker",
          title: 'Safety Scoreboard Tracker',
          description: "Digitized safety incident tracking system with automated reporting.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/1_project/";
            },},{id: "projects-workforce-vs-aim-hours-reconciliation",
          title: 'Workforce vs AiM Hours Reconciliation',
          description: "Automated cross-platform tracking system for labor hour reconciliation between Workforce and AiM.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/2_project/";
            },},{id: "projects-facility-services-yearly-kpis",
          title: 'Facility Services Yearly KPIs',
          description: "Automated yearly dashboard tracking key performance indicators for Facility Services.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/3_project/";
            },},{id: "projects-meter-reading-amp-usage-tracker",
          title: 'Meter Reading &amp;amp; Usage Tracker',
          description: "Centralized meter reading tracking system with anomaly detection and trend monitoring.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/4_project/";
            },},{id: "projects-invoice-automation-energy-management",
          title: 'Invoice Automation - Energy Management',
          description: "Automated invoice reading and processing using AI and data pipelines to streamline utility billing in AiM.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/5_project/";
            },},{id: "projects-employee-extracts-payroll-validation",
          title: 'Employee Extracts - Payroll Validation',
          description: "Automated biweekly payroll verification system to ensure accuracy of employee hours and salary rates before payroll processing.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/6_project/";
            },},{id: "projects-smart-warehouse-automation",
          title: 'Smart Warehouse Automation',
          description: "Deployment, programming, and optimization of Laser Guided Vehicles (LGVs) for automated product handling in a smart warehouse environment.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/7_project/";
            },},{id: "projects-lgv-navigation-optimization",
          title: 'LGV Navigation Optimization',
          description: "Development and optimization of advanced navigation logic for Laser Guided Vehicles (LGVs) using SQL-driven traffic rules and warehouse segmentation for efficient and safe automated transport.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/8_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%66%6C.%6F%72%6F%7A%63%6F@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/portfolio//feed.xml", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
