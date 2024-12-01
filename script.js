particlesJS.load('particles-js', 'particles.json', function () {
  console.log('callback - particles.js config loaded');
});



let scrollPos = 0;
const nav = document.getElementById('navbar');
let windowHeight = window.innerHeight;
let navHeight = nav.innerHeight;



function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < windowHeight + 100) {
    // Scrolling UP
    nav.style.visibility = "hidden"
    // nav.classList.toggle("active");
  } else {
    // Scrolling DOWN
    nav.style.visibility = "visible"
    // nav.classList.toggle("active");
  }
  scrollPos = windowY;
}

function debounce(func, wait = 0, immediate = true) {
  let timeout;
  return function () {
    let context = this, args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

window.addEventListener('scroll', debounce(checkPosition));





document.addEventListener('DOMContentLoaded', () => {
  const projectBody = document.getElementById('project-body');
  const filterButtonsContainer = document.getElementById('filter-buttons');
  const categories = ["All"];

  // categories.forEach(category => {
  //   const button = document.createElement('button');
  //   button.textContent = category;
  //   button.className = category === "All" ? 'btn bttn btn-light mx-1 mb-3' : 'btn bttn btn-light mx-1 mb-3';
  //   // button.className = 'bttn mx-1 mb-3';
  //   button.dataset.filter = category;
  //   filterButtonsContainer.appendChild(button);

  //   if (category == "All") {
  //     button.classList.add('btn-active');
  //   }

  //   button.addEventListener('click', () => {
  //     document.querySelectorAll('.btn-active').forEach(btn => btn.classList.remove('btn-active'));
  //     button.classList.add('btn-active');
  //     filterProjects(category);
  //   });

  //   // filterProjects(category)
  // });




  const badgeColors = {
    "Python": "#6EA4BF",
    "Jupyter Notebook": "#C78283",
    "PyTorch": "#465775",
    "Plotly": "#FF9FB2",
    "Matplotlib": "#B49286",
    "Keras": "#93A8AC",
    "Sklearn": "#38405F",
    "SpaCy": "#59546C",
    "SciPy": "#21601c",
    "NumPy": "#F2545B",
    "Pandas": "#083A42",
    "LangChain": "#7798AB",
    "Speech-to-Text (STT)": "#E8DCB9",
    "Kubernetes": "#A6D8D4",
    "ResNet": "#33CA7F",
    "Dask": "#FC9F5B",
    "FASTAPI": "#456990",
    "JSON": "#F45B69",
    "Java": "#A882DD",
    "Java Swing": "#49416D",
    "TensorFlow": "#F2AF29",
    "GeoPandas": "#A97C73",
    "BioPython": "#5DA271",
    "OpenAI": "#2D3047",
    "Cohere": "#C3DBC5"
  };

  const projects = [
    {
      imgSrc: "images/taco.jpeg",
      title: "Controller-Pilot Voice Communication and Intent Monitoring for Future Aviation Systems Safety",
      text: "Large-scale programming project using three models to evaluate safety of aviation systems through (1) speech attribute analysis, (2) natural language processing and speech-to-text, and (3) intent inference analysis. Primary goal is to develop a fully synced model able to detect aviation system safety issues through ATCO audios. ",
      text2: "Model simulation showing moments of ATCO influence and impact of three different models. Key speech attribute patterns are demonstrated with LiveATC audios, including a bimodal distribution of Spectral Flatness, Onset Rate, and Onset Strength and clear distinguishing patterns across different sectors. An IsolationForest Outlier classification model is developed to classify off-nominal air traffic controllers’ utterances.",
      badges: ["Python", "Pandas", "NumPy", "Matplotlib", "Plotly", "Speech-to-Text (STT)"],
      buttonText: "Publication",
      buttonDisabled: false,
      buttonLink: "https://doi.org/10.2514/6.2024-3942",
      columnClass: "col-lg-6",
      categories: ["Speech attribute analysis", "Speech-to-text conversion", "Anomaly detection"]
    },
    {
      imgSrc: "images/contrails.jpeg",
      title: "High-Performance Neural Network Development for a Contrail Observation System",
      text: "Developed model for classifying aviation-induced cloud 'contrails,' using NASA GOES-16 satellite imagery. Leveraged state-of-the-art semantic segmentation neural networks built on a ResNet architecture for accurate detection. Optimized model performance and training efficiency by utilizing high-performance computing technologies and parallel processing frameworks, including Dask, to handle large-scale data processing and resource-intensive computations effectively.",
      text2: "Low F1 score and loss, high IOU (Intersection Over Union) score. Model developed a framework for large-scale contrail research funded by the ARPA-E (Advanced Research Projects Agency–Energy).",
      badges: ["Python", "Pandas", "NumPy", "Matplotlib", "Plotly", "Kubernetes", "ResNet", "Dask"],
      buttonText: "Project Not Publicly Accessible",
      buttonDisabled: true,
      buttonLink: "",
      columnClass: "col-lg-6",
      categories: ["Semantic segmentation", "neural network architecture design", "Geospatial data analysis", "high-performance computing", "parallel processing"]
    },
    {
      imgSrc: "images/noise.png",
      title: "Distributed Noise Analytics for Regional Aviation",
      text: "Developed a system for distributed analytics of aviation-induced noise impacts, focusing on AIRNOISE and UNIT data outputs. Leveraged high-performance computing frameworks and advanced processing techniques to handle large-scale noise datasets efficiently. Integrated WebAPI for streamlined access and NASA WorldWind for geospatial visualization, enabling interactive exploration of noise patterns.",
      text2: "Enhanced data processing and visualization for noise impact assessments. Created a scalable framework for integrating future machine learning-based noise abatement models. Employed the parallel processing capabilities of Dask to optimize CPU usage of NASA models, achieving a 58% reduction in computing time within NASA’s High Performance Computing environment.",
      badges: ["Python", "Dask", "Matplotlib", "FASTAPI", "JSON"],
      buttonText: "Project Not Publicly Accessible",
      buttonDisabled: true,
      buttonLink: "",
      columnClass: "col-lg-6",
      categories: ["Data parsing", "High-performance computing", "parallel processing", "Statistical modeling", "WebAPI", "Geospatial Data Analysis", "Time series"]
    },
    {
      imgSrc: "images/wwf.jpeg",
      title: "Quantifying World Wildlife Fund’s Global Impacts",
      text: "Developed a comprehensive data analytics pipeline for the World Wildlife Fund (WWF) to visualize their global impact. The project involved processing over 200 reports in PDF format, utilizing state-of-the-art Natural Language Processing (NLP) techniques to extract location-based information, and creating an interactive map interface.",
      text2: "Interactive map enabling users to explore WWF’s global projects with detailed summaries, accomplishments, and geospatial representations. The tool improves access to data, allowing stakeholders to visualize and analyze WWF’s contributions worldwide effectively.",
      badges: ["Python", "SpaCy", "LangChain", "OpenAI", "Cohere", "NumPy", "GeoPandas", "Dask"],
      buttonText: "Project",
      buttonDisabled: false,
      buttonLink: "https://drive.google.com/file/d/1q_2bIj93O-sVn6sVTMIN39QJaDJNDA8E/view?usp=sharing",
      columnClass: "col-lg-6",
      categories: ["Natural Language Processing (NLP)", "Named Entity Recognition (NER)", "Geospatial data analysis", "Prompt engineering", "Parallel computing"]
    },
    {
      imgSrc: "images/intuit.jpeg",
      title: "Optimizing Inuit Diets: Economic Analysis of Cost-Effective Nutritional Solutions",
      text: "Using FDC food data API in order to develop a predictive model able to take into account Inuit diet minimum requirements and food data in order to devise a minimum cost requirement for governmental purposes. Study of Economic Elasticity and effects on diet.",
      text2: "Found that the introduction of traditional foods in the Inuit diet led to a cost reduction of $171,925.02, showing that a big way to reduce food insecurity for the population would be by removing barriers to access for hunting, fishing, and gathering and ensuring sustainable resources.",
      badges: ["Python", "Pandas", "NumPy", "SciPy", "Plotly"],
      buttonText: "Project",
      buttonDisabled: false,
      buttonLink: "https://github.com/vishalival/eep153-margaret-reid",
      columnClass: "col-lg-4",
      categories: ["Data Science/ML", "API integration", "predictive modeling", "economic analysis", "statistical analysis", "sustainability assessment"]
    },
    {
      imgSrc: "images/gmo.jpeg",
      title: "Enhancing Nutrition Through GMO Policy in Eastern Africa",
      text: "Evaluation of the potential nutritional benefits of introducing genetically-modified organisms (GMOs) and fortified foods in Eastern African countries, specifically Uganda and Tanzania. By analyzing dietary deficiencies and simulating policy scenarios, the research highlights the inefficiencies in current GMO-banned systems and proposes GMO-positive strategies to maximize nutritional outcomes.",
      text2: "Simulation analysis suggested that trade could effectively address nutritional deficiencies between neighboring countries. Simulating a trade policy between Uganda and Tanzania led to significant improvements: Uganda’s population meeting protein requirements increased from 58.29% to 87.71%, and Tanzania’s population meeting Vitamin C intake rose from 23.18% to 86.09%",
      badges: ["Python", "Pandas", "Matplotlib", "NumPy", "Plotly"],
      buttonText: "Project",
      buttonDisabled: false,
      buttonLink: "https://github.com/vishalival/eep153-norman-borlaug",
      columnClass: "col-lg-4",
      categories: ["Data visualization", "trade policy simulation", "nutritional analysis", "climate impact assessment", "statistical modeling"]
    },
    {
      imgSrc: "images/rwanda.jpeg",
      title: "Quantifying the Impacts of the 1994 Rwandan Genocide: Migration and Gender Disparities",
      text: "Data analysis project to quantify the impacts of the 1994 Rwandan Genocide, including migration to other countries and the long-lasting gender gap it has caused.",
      text2: "Quantified the genocide, migration of Tulsi population by net -2.16 millions leaving Rwanda in 1994, with primary counties migrated to being the DRC, Burundi, Tanzania, and Uganda.",
      badges: ["Python", "Pandas", "Plotly"],
      buttonText: "Project",
      buttonDisabled: false,
      buttonLink: "https://github.com/vishalival/eep153-john-graunt/blob/main/Project-Final/final_project_final.ipynb ",
      columnClass: "col-lg-4",
      categories: ["Data visualization", "data analysis", "API integration", "population modeling", "statistical analysis"]
    },
    {
      imgSrc: "images/trade.jpeg",
      title: "Optimizing Nutritional Outcomes Through Trade and Climate Analysis: Uganda and Tanzania",
      text: "Analyzed food consumption in Uganda and Tanzania to determine whether populations meet key dietary requirements like protein, vitamins, etc. Using this data, simulated trade scenarios to address nutrient deficiencies by exchanging surplus resources between both countries. Additionally examined the impacts of climate change on primary agricultural products in both countries.",
      text2: "Simulation analysis suggested that trade could effectively address nutritional deficiencies between neighboring countries. Simulating a trade policy between Uganda and Tanzania led to significant improvements: Uganda’s population meeting protein requirements increased from 58.29% to 87.71%, and Tanzania’s population meeting Vitamin C intake rose from 23.18% to 86.09%",
      badges: ["Python", "Pandas", "Matplotlib", "NumPy", "Plotly"],
      buttonText: "Project",
      buttonDisabled: false,
      buttonLink: "https://github.com/vishalival/eep153-stanley-jevons",
      columnClass: "col-lg-4",
      categories: ["Data visualization", "trade policy simulation", "nutritional analysis", "climate impact assessment", "statistical modeling"],
    },

    {
      imgSrc: "images/civeng.jpeg",
      title: "Modules - Civil Engineering 190 Pedagogy",
      text: "Developed 5 different Python notebook walk-through coding assignments for students in Civil Engineering 190, a course on Data and Equity in Environmental Engineering. Notebooks educated students on key Data Science methods exploring the following topics: Google Street View Monitoring, Electrical Vehicle Charging, Coastal Resilience, and Wastewater Monitoring.",
      text2: "Successfully built Python course modules for different courses, expanding accessibility and reach of data science educational initiatives on UC Berkeley’s campus.",
      badges: ["Python", "Pandas", "NumPy", "GeoPandas", "BioPython"],
      buttonText: "Project",
      buttonDisabled: false,
      buttonLink: "https://github.com/ds-modules/CIVENG-190-DEV",
      columnClass: "col-lg-4",
      categories: ["Education"]
    },


    {
      imgSrc: "images/adhd.jpeg",
      title: "Automated ADHD Diagnosis Using Deep Learning",
      text: "Developed a neural network to predict ADHD using National Health Interview Survey (NHIS) data. The model incorporates over 600 features, including medical, demographic, and socioeconomic factors, achieving high accuracy and robustness.",
      text2: "Achieved 97.1% accuracy, 0.994 ROC, and high precision/recall scores. Provided insights into ADHD correlations with race, socioeconomic status, and psychological behaviors while addressing data biases.",
      badges: ["Python", "Keras", "TensorFlow"],
      buttonText: "Project",
      buttonDisabled: false,
      buttonLink: "https://drive.google.com/file/d/1gPBscbEzJ3kdRwa-P_UHS4ub-2_x7y-r/view?usp=sharing",
      columnClass: "col-lg-4",
      categories: ["Deep Learning", "data preprocessing", "classification", "statistical analysis", "healthcare analytics"],
    },
    {
      imgSrc: "images/byow.jpeg",
      title: "BYOW",
      text: "Designed and implemented a procedural world generator and interactive gameplay system entirely from scratch. Utilized Java to create random explorable 2D worlds featuring rooms, hallways, walls, and locked doors. Incorporated game mechanics such as player movement and object interactions, with a focus on efficient map rendering and software engineering practices.",
      text2: "Successfully built a fully functional game engine for procedural world generation, achieving smooth interactivity and seamless rendering. Delivered a project with robust design and high engagement value, graded as an exemplary software engineering effort.",
      badges: ["Java", "Java Swing"],
      buttonText: "Project",
      buttonDisabled: false,
      buttonLink: "https://www.youtube.com/watch?v=qK33O-Fko5s",
      columnClass: "col-lg-4",
      categories: ["Software engineering", "Game Design", "OOP"]
    },



  ];

  // Display all projects initially
  displayProjects(projects);

  function displayProjects(projects) {
    const projectBody = document.getElementById('project-body');
    projectBody.innerHTML = ''; // Clear existing projects
    projects.forEach(project => {
      const colDiv = document.createElement('div');
      colDiv.className = `${project.columnClass} col-md-6 col-sm-12 mb-4 d-flex align-items-stretch`;

      const cardDiv = document.createElement('div');
      cardDiv.className = 'card';

      const img = document.createElement('img');
      img.src = project.imgSrc;
      img.className = 'card-img-top';
      img.alt = '...';

      const cardBodyDiv = document.createElement('div');
      cardBodyDiv.className = 'card-body d-flex flex-column';

      const h5 = document.createElement('h5');
      h5.className = 'card-title';
      h5.textContent = project.title;

      const p = document.createElement('p');
      p.className = 'card-text';
      p.textContent = project.text;

      const p2 = document.createElement('p');
      p2.className = 'card-text';
      p2.textContent = project.text2;

      cardBodyDiv.appendChild(h5);
      cardBodyDiv.appendChild(p);
      cardBodyDiv.appendChild(p2);

      const cardFooterDiv = document.createElement('div');
      cardFooterDiv.className = 'card-body d-flex align-items-end justify-content-around';

      const a = document.createElement('a');
      a.style.color = 'inherit';
      a.style.textDecoration = 'inherit';
      a.style.display = 'inline-block';
      a.style.width = '100%';
      if (!project.buttonDisabled) {
        a.href = project.buttonLink;
      }
      a.target = '_blank';

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'w-100 mx-1 btn btn-outline-dark';
      button.textContent = project.buttonText;
      if (project.buttonDisabled) {
        button.disabled = true;
        button.style.pointerEvents = "none";
        button.setAttribute('aria-disabled', true);
      }

      a.appendChild(button);
      cardFooterDiv.appendChild(a);

      const cardFooter = document.createElement('div');
      cardFooter.className = 'card-footer text-body-secondary';

      project.badges.forEach(badge => {
        const span = document.createElement('span');
        span.className = 'badge';
        span.style.backgroundColor = badgeColors[badge];
        span.textContent = badge;
        span.style.marginRight = '5px'; // Adding right margin for spacing
        span.style.marginBottom = '5px'; // Adding bottom margin for vertical spacing if badges wrap
        cardFooter.appendChild(span);
      });

      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBodyDiv);
      cardDiv.appendChild(cardFooterDiv);
      cardDiv.appendChild(cardFooter);
      colDiv.appendChild(cardDiv);
      projectBody.appendChild(colDiv);
    });
  }


  function filterProjects(filter) {
    if (filter === "All") {
      displayProjects(projects);
      return;
    }
    else {

      const filteredProjects = projects.filter(project =>
        project.categories.includes(filter)
      );
      displayProjects(filteredProjects);
    }

  }

});
