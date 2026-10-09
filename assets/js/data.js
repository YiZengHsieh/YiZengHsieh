/* =====================================================================
   CV DATA — edit this file to update the website.
   Every section of the page is rendered from the objects below.
   ===================================================================== */

window.CV = {
  /* ---------- Profile ---------- */
  profile: {
    name: "Yi-Zeng Hsieh",
    nameZh: "謝易錚",
    title: "Professor",
    department: "Department of Electrical Engineering",
    university: "National Taiwan University of Science and Technology (NTUST)",
    lab: "Computational Intelligence and Human-Computer Interaction Laboratory",
    photo: "assets/img/profile.jpg",
    email: "yzhsieh@mail.ntust.edu.tw",
    phone: "+886-2-2733-3141 ext. 6679",
    address: "No. 43, Sec. 4, Keelung Rd., Da'an Dist., Taipei City 106335, Taiwan",
    links: {
      lab: "http://cihci.ee.ntust.edu.tw/",
      // Fill these in and they will appear automatically; leave "" to hide.
      scholar: "",
      orcid: "",
      linkedin: "",
      github: "",
      cvPdf: "" // e.g. "assets/Yi-Zeng_Hsieh_CV.pdf"
    },
    bio: [
      "Yi-Zeng Hsieh is a Professor in the Department of Electrical Engineering at National Taiwan University of Science and Technology (NTUST), where he leads the Computational Intelligence and Human-Computer Interaction (CIHCI) Laboratory. He received his B.S., M.S., and Ph.D. degrees in Computer Science and Information Engineering from National Central University, Taiwan, under the supervision of Prof. Mu-Chun Su.",
      "After his doctorate he was a visiting scholar at Harvard Medical School (Beth Israel Deaconess Medical Center), a postdoctoral fellow at National Taiwan University, and a principal engineer at MStar Semiconductor. He then held faculty positions at Shih Chien University, Southern Taiwan University of Science and Technology, and National Taiwan Ocean University, before joining NTUST in 2022. He was a visiting scholar at Stanford University in 2024.",
      "His research spans deep learning, generative AI, computer vision, human-computer interaction, embedded systems, and robotics, with applications in assistive technology for the visually impaired, smart aquaculture, medical imaging, autonomous driving, and energy systems. He is an IEEE Senior Member and serves as Editor-in-Chief of Discover Computing and of the Journal of Artificial Intelligence and Science Communication."
    ]
  },

  interests: [
    { name: "Deep Learning & Generative AI", icon: "brain" },
    { name: "Computer Vision & Pattern Recognition", icon: "eye" },
    { name: "Human-Computer Interaction", icon: "hand" },
    { name: "Machine Learning & Computational Intelligence", icon: "chip" },
    { name: "Big Data Analytics", icon: "chart" },
    { name: "Embedded Systems & Robotics", icon: "robot" }
  ],

  /* ---------- Education ---------- */
  education: [
    {
      degree: "Ph.D., Computer Science and Information Engineering",
      school: "National Central University, Taiwan",
      period: "2006 – 2012",
      note: "Dissertation: A Q-learning-based Swarm Optimization Algorithm and its Applications · Advisor: Prof. Mu-Chun Su"
    },
    {
      degree: "M.S., Computer Science and Information Engineering",
      school: "National Central University, Taiwan",
      period: "2004 – 2006",
      note: "Thesis: A Stereo-Vision-Based Aid System for the Blind · Advisor: Prof. Mu-Chun Su"
    },
    {
      degree: "B.S., Computer Science and Information Engineering",
      school: "National Central University, Taiwan",
      period: "2000 – 2004",
      note: ""
    }
  ],

  /* ---------- Experience ---------- */
  experience: [
    { role: "Professor", org: "Dept. of Electrical Engineering, National Taiwan University of Science and Technology", period: "Aug 2024 – Present", current: true },
    { role: "Visiting Scholar", org: "Stanford University, Stanford, CA, USA", period: "Jul 2024" },
    { role: "Associate Professor", org: "Dept. of Electrical Engineering, National Taiwan University of Science and Technology", period: "Feb 2022 – Jul 2024" },
    { role: "Professor", org: "Dept. of Electrical Engineering, National Taiwan Ocean University", period: "Aug 2021 – Jan 2022" },
    { role: "Associate Professor", org: "Dept. of Electrical Engineering, National Taiwan Ocean University", period: "Aug 2018 – Jul 2021" },
    { role: "Assistant Professor", org: "Dept. of Electrical Engineering, National Taiwan Ocean University", period: "Feb 2017 – Jul 2018" },
    { role: "Assistant Professor", org: "Dept. of Industrial Management and Information, Southern Taiwan University of Science and Technology", period: "Aug 2014 – Jan 2017" },
    { role: "Project Assistant Professor", org: "Dept. of Information Technology and Communication, Shih Chien University (Kaohsiung Campus)", period: "Feb 2014 – Jul 2014" },
    { role: "Industry Consultant / Senior Engineer", org: "Several technology companies in Taiwan", period: "2014 – 2016" },
    { role: "Principal Engineer", org: "MStar Semiconductor", period: "Jan 2014 – Feb 2014" },
    { role: "Postdoctoral Fellow", org: "Dept. of Computer Science and Information Engineering, National Taiwan University", period: "Aug 2013 – Jan 2014" },
    { role: "Alternative Military Service (IT Specialist)", org: "Tourism Bureau, Taiwan", period: "Oct 2012 – Jul 2013" },
    { role: "Visiting Scholar", org: "Harvard Medical School, Boston, MA, USA", period: "Aug 2011 – Sep 2012" },
    { role: "Adjunct Lecturer", org: "Dept. of Computer Science and Information Engineering, Ching Yun University", period: "Feb 2008 – Feb 2009" },
    { role: "Software Engineer & Research Assistant", org: "Software Research Center, National Central University", period: "Aug 2006 – Jul 2011" }
  ],

  /* ---------- Publications ----------
     type: "journal" | "conference" | "chapter"
     Your name is highlighted automatically.                               */
  publications: [
    // ---- Journal papers ----
    { type: "journal", year: 2026, authors: "Yu-Shiuan Tsai, Quan-Bin Zhang, Po-Yang Chi, Shang-Ze Lin, Chien-Hsing Chou, Yi-Zeng Hsieh*", title: "A Blurred Face Recognition System for Enhanced Surveillance: Integrating Automated Detection and Identification with Existing Infrastructure", venue: "Sensors and Materials, vol. 38, no. 8, pp. 4415–4438, 2026", tags: ["SCI"] },
    { type: "journal", year: 2025, authors: "Yi-Zeng Hsieh, Ji-Jie Lin, Mu-Chun Su, Wei-Jen Lin", title: "Strumming in the Metaverse: A Deep-Learning-Enabled Virtual Air Guitar System in VR with Enhanced Chord Recognition and Simulated Pedal Effects", venue: "IEEE Transactions on Multimedia, 2025", doi: "10.1109/TMM.2025.3535282", tags: ["SCI", "Q1", "Top 5%"] },
    { type: "journal", year: 2025, authors: "Yi-Zeng Hsieh, M.-C. Chang", title: "Underwater Image Enhancement and Attenuation Restoration Based on Depth and Backscatter Estimation", venue: "IEEE Transactions on Computational Imaging, vol. 11, pp. 321–332, 2025", doi: "10.1109/TCI.2025.3544065", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2025, authors: "Yu-Shiuan Tsai, Yi-Zeng Hsieh*, Kai-En Lin, Pin-Hsiang Wang", title: "Parallel Concatenated Feature Pyramid Network for Dehazing a Single Image on Smartphone Images", venue: "IET Image Processing, vol. 19, no. 1, e70187, 2025", doi: "10.1049/ipr2.70187", tags: ["SCI"] },
    { type: "journal", year: 2025, authors: "Yi-Zeng Hsieh*, C.-H. Wu, Y.-T. Chen", title: "Integrating Self-Organizing Feature Map with Graph Convolutional Network for Enhanced Superpixel Segmentation and Feature Extraction in Non-Euclidean Data Structure", venue: "Multimedia Tools and Applications, vol. 84, pp. 15689–15714, 2025", doi: "10.1007/s11042-024-19619-5", tags: ["SCI"] },
    { type: "journal", year: 2025, authors: "Chien-Hsing Chou, Cheng-Hou Chou, Yi-Zeng Hsieh*, Tzu-Shien Yang", title: "Integrating CycleGAN and BERT for Chinese Text Style Transfer", venue: "Multimedia Tools and Applications, vol. 84, pp. 25895–25914, 2025", doi: "10.1007/s11042-024-20131-z", tags: ["SCI"] },
    { type: "journal", year: 2024, authors: "Yi-Zeng Hsieh, Yong-Yi Fanjiang, Jan-Pan Hwang", title: "Predicting the Distance of Objects in the Blind Zone of an Ultrasonic Array", venue: "Journal of Internet Technology, vol. 25, no. 7, pp. 977–985, Dec. 2024", tags: ["SCI"] },
    { type: "journal", year: 2024, authors: "M.-C. Su, J.-H. Chen, Yi-Zeng Hsieh*, S.-C. Hsu, C.-W. Liao", title: "Enhancing Detection of Falls and Bed-Falls Using a Depth Sensor and Convolutional Neural Network", venue: "IEEE Sensors Journal, vol. 24, no. 14, pp. 23150–23162, Jul. 2024", doi: "10.1109/JSEN.2024.3404031", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2024, authors: "J. Chang, N. Lin, Q. Zhou, Yi-Zeng Hsieh, M. Ivanovic", title: "Guest Editorial: Deep Learning Techniques in Intelligent Internet of Things and 5G Communication Networks", venue: "Computer Science and Information Systems, vol. 21, no. 2, pp. i–v, 2024", doi: "10.2298/CSIS240200iC", tags: ["SCI"] },
    { type: "journal", year: 2024, authors: "Yi-Zeng Hsieh, Yen-Hsun Meng", title: "A Video Surveillance System for Determining the Sexual Maturity of Cobia", venue: "IEEE Transactions on Consumer Electronics, vol. 70, no. 1, pp. 484–495, Feb. 2024", doi: "10.1109/TCE.2023.3338263", tags: ["SCI"] },
    { type: "journal", year: 2024, authors: "Yi-Zeng Hsieh, Po-Yen Lee", title: "Analysis of Oplegnathus punctatus Body Parameters Using Underwater Stereo Vision", venue: "IEEE Transactions on Emerging Topics in Computational Intelligence, vol. 8, no. 1, pp. 879–891, Feb. 2024", doi: "10.1109/TETCI.2023.3290022", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2023, authors: "Yi-Zeng Hsieh, Xiang-Long Ku, Shih-Syun Lin*", title: "The Development of Assisted-Visually Impaired People Robot in the Indoor Environment Based on Deep Learning", venue: "Multimedia Tools and Applications, Jun. 2023", doi: "10.1007/s11042-023-15644-y", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2023, authors: "Yi-Zeng Hsieh, Fu-Xiong Xu, Shih-Syun Lin*", title: "Deep Convolutional Generative Adversarial Network for Inverse Kinematics of Self-Assembly Robotic Arm Based on the Depth Sensor", venue: "IEEE Sensors Journal, vol. 23, Jan. 2023", doi: "10.1109/JSEN.2022.3222332", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2022, authors: "Chien-Hsing Chou, Ping-Hsuan Han, Chia-Chun Chang, Yi-Zeng Hsieh*", title: "Garment Style Creator: Using StarGAN for Image-to-Image Translation of Multi-Domain Garments", venue: "IEEE MultiMedia, vol. 29, pp. 85–93, Mar. 2022", tags: ["SCI", "Q1", "Top 10%"] },
    { type: "journal", year: 2021, authors: "Mu-Chun Su, Chun-Ting Cheng, Ming-Ching Chang, Yi-Zeng Hsieh*", title: "A Video Analytic In-Class Student Concentration Monitoring System", venue: "IEEE Transactions on Consumer Electronics, vol. 67, no. 4, pp. 294–304, Nov. 2021", tags: ["SCI"] },
    { type: "journal", year: 2021, authors: "Yu-Xiang Zhao, Zheng-Xian Lu, Yi-Zeng Hsieh*, Shih-Syun Lin, Pei-Ying Chiang*", title: "The Wearable Physical Fitness Training Device Based on Fuzzy Theory", venue: "Applied Sciences, vol. 11, no. 21, 9976, Oct. 2021", tags: ["SCI"] },
    { type: "journal", year: 2021, authors: "Ying-Hung Pu, Po-Sheng Chiu, Yu-Shiuan Tsai*, Meng-Tsung Liu, Yi-Zeng Hsieh, Shih-Syun Lin", title: "Aerial Face Recognition and Absolute Distance Estimation Using Drone and Deep Learning", venue: "The Journal of Supercomputing, 2021", tags: ["SCI"] },
    { type: "journal", year: 2021, authors: "Yu-Shiuan Tsai, Nai-Chi Chen, Yi-Zeng Hsieh*, Shih-Syun Lin", title: "The Development of Long-Distance Viewing Direction Analysis and Recognition of Observed Objects Using Head Image and Deep Learning", venue: "Mathematics, vol. 9, no. 19, 2021", tags: ["SCI", "Q1", "Top 5%"] },
    { type: "journal", year: 2021, authors: "Shih-Wei Tan, Sheng-Wei Huang, Yi-Zeng Hsieh*, Shih-Syun Lin*", title: "The Estimation Life Cycle of Lithium-Ion Battery Based on Deep Learning Network and Genetic Algorithm", venue: "Energies, vol. 14, no. 14, Jul. 2021", tags: ["SCI"] },
    { type: "journal", year: 2021, authors: "Yi-Zeng Hsieh, Shih-Syun Lin, En-Yu Chang, Kwong-Kau Tiong, Shih-Wei Tan, Chiou-Yi Hor, Shyi-Chy Cheng, Yu-Shiuan Tsai*, Chao-Rong Chen*", title: "Wind Technologies for Wake Effect Performance in Windfarm Layout Based on Population-Based Optimization Algorithm", venue: "Energies, 2021", tags: ["SCI"] },
    { type: "journal", year: 2021, authors: "Nodali Ndraha, Hsin-I Hsiao, Yi-Zeng Hsieh, Abani K. Pradhan", title: "Predictive Models for the Effect of Environmental Factors on the Abundance of Vibrio parahaemolyticus in Oyster Farms in Taiwan Using Extreme Gradient Boosting", venue: "Food Control, 2021", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2021, authors: "Chung-Cheng Chang, Jung-Hua Wang, Jenq-Lang Wu, Yi-Zeng Hsieh, et al.", title: "Applying Artificial Intelligence (AI) Techniques to Implement a Practical Smart Cage Aquaculture Management System", venue: "Journal of Medical and Biological Engineering, 2021", tags: ["SCI"] },
    { type: "journal", year: 2021, authors: "Mu-Chun Su, Pang-Ti Tai, Jieh-Haur Chen, Yi-Zeng Hsieh*, Shu-Fang Lee, Zhe-Fu Yeh", title: "A Projection-Based Human Motion Recognition Algorithm Based on Depth Sensors", venue: "IEEE Sensors Journal, vol. 21, pp. 16990–16996, 2021", doi: "10.1109/JSEN.2021.3079983", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2021, authors: "Chien-Hsing Chou⁺, Yi-Zeng Hsieh⁺, Shih-Syun Lin*, Tao-Jen Yang, Wei-An Chen, Yung-Long Chu, Hong-Lin Chang", title: "Passive Haptic Learning of Taiwanese Braille Writing for Visually Impaired Individuals", venue: "Journal of Imaging Science and Technology, vol. 65, no. 2, pp. 20402-1–20402-9, Mar. 2021", tags: ["SCI"] },
    { type: "journal", year: 2021, authors: "Yu-Xiang Zhao⁺, Yi-Zeng Hsieh⁺, Shih-Syun Lin*", title: "The Development of Identification Photo Booth System Based on a Deep Learning Automatic Image Capturing Method", venue: "Journal of Imaging Science and Technology, vol. 65, no. 2, pp. 20403-1–20403-10, Mar. 2021", tags: ["SCI"] },
    { type: "journal", year: 2020, authors: "Yu-Xiang Zhao, Yi-Zeng Hsieh*, Shih-Syun Lin, Chin-Ju Pan, Chi-Wen Nan", title: "Design of an IoT-Based Mountaineering Team Management Device Using Kalman Filter Algorithm", venue: "Journal of Internet Technology, vol. 21, no. 7, pp. 2085–2093, Dec. 2020", tags: ["SCI"] },
    { type: "journal", year: 2020, authors: "Yu-Kai Lin, Mu-Chun Su*, Yi-Zeng Hsieh*", title: "The Application and Improvement of Deep Neural Networks in Environmental Sound Recognition", venue: "Applied Sciences, vol. 10, Aug. 2020", tags: ["SCI"] },
    { type: "journal", year: 2020, authors: "Yu-Shiuan Tsai, Li-Heng Hsu, Yi-Zeng Hsieh*, Shih-Syun Lin*", title: "The Real-Time Depth Estimation for an Occluded Person Based on a Single Image and OpenPose Method", venue: "Mathematics, vol. 8, Aug. 2020", tags: ["SCI", "Q1", "Top 10%"] },
    { type: "journal", year: 2020, authors: "Yi-Zeng Hsieh, Shih-Syun Lin*, Fu-Xiong Xu", title: "Development of a Wearable Guide Device Based on Convolutional Neural Network for Blind or Visually Impaired Persons", venue: "Multimedia Tools and Applications, vol. 79, pp. 29473–29491, Aug. 2020", doi: "10.1007/s11042-020-09464-7", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2020, authors: "Yi-Zeng Hsieh, Shih-Syun Lin*, Yu-Cin Luo, Yu-Lin Jeng, Shih-Wei Tan*, Chao-Rong Chen, Pei-Ying Chiang", title: "ARCS-Assisted Teaching Robots Based on Anticipatory Computing and Emotional Big Data for Improving Sustainable Learning Efficiency and Motivation", venue: "Sustainability, vol. 12, Jul. 2020", tags: ["SCI", "SSCI"] },
    { type: "journal", year: 2020, authors: "Yi-Zeng Hsieh, Shih-Syun Lin*", title: "Robotic Arm Assistance System Based on Simple Stereo Matching and Q-Learning Optimization", venue: "IEEE Sensors Journal, vol. 20, no. 18, pp. 10945–10954, Sep. 2020", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2020, authors: "Mu-Chun Su, Tat-Meng U, Yi-Zeng Hsieh*, Zhe-Fu Yeh, Shu-Fang Lee, Shih-Syun Lin*", title: "An Eye-Tracking System Based on Inner Corner-Pupil Center Vector and Deep Neural Network", venue: "Sensors, vol. 20, no. 1, 2020", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2020, authors: "Yi-Zeng Hsieh, Shih-Wei Tan, Siang-Long Gu, Yu-Lin Jeng*", title: "Prediction of Battery Discharge States Based on the Recurrent Neural Network", venue: "Journal of Internet Technology, vol. 21, no. 1, pp. 113–120, Jan. 2020", tags: ["SCI"] },
    { type: "journal", year: 2019, authors: "Yi-Zeng Hsieh*, Yu-Cin Luo, Chen Pan, Mu-Chun Su, Chi-Jen Chen, Kevin Li-Chun Hsieh", title: "Cerebral Small Vessel Disease Biomarkers Detection on MRI-Sensor-Based Image and Deep Learning", venue: "Sensors, vol. 19, no. 11, Jun. 2019", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2018, authors: "Yi-Zeng Hsieh, Mu-Chun Su, Jieh-Haur Chen*, Bevan Annuerine Badjie, Yu-Min Su", title: "Developing a PSO-Based Projection Algorithm for a Porosity Detection System Using X-Ray CT Images of Permeable Concrete", venue: "IEEE Access, vol. 6, pp. 64406–64415, Oct. 2018", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2017, authors: "Yi-Zeng Hsieh*, Yu-Lin Jeng", title: "Development of Home Intelligent Fall Detection IoT System Based on Feedback Optical Flow Convolutional Neural Network", venue: "IEEE Access, vol. 6, pp. 6048–6057, Nov. 2017", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2017, authors: "Yu-Hao Chin, Yi-Zeng Hsieh, Mu-Chun Su, Shu-Fang Lee, Miao-Wen Chen, Jia-Ching Wang*", title: "Music Emotion Recognition Using PSO-Based Fuzzy Hyper-Rectangular Composite Neural Networks", venue: "IET Signal Processing, vol. 11, no. 7, pp. 884–891, Aug. 2017", tags: ["SCI"] },
    { type: "journal", year: 2017, authors: "Mu-Chun Su, Yi-Zeng Hsieh*, Chen-Hsu Wang, Pa-Chun Wang", title: "A Jacobian Matrix-Based Learning Machine and Its Applications in Medical Diagnosis", venue: "IEEE Access, vol. 5, pp. 20036–20045, Mar. 2017", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2016, authors: "Yi-Zeng Hsieh, Mu-Chun Su*", title: "A Q-Learning-Based Swarm Optimization Algorithm for Economic Dispatch Problem", venue: "Neural Computing and Applications, vol. 27, no. 8, pp. 2333–2350, Nov. 2016", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2015, authors: "Mu-Chun Su, Jhih-Jie Jhang, Yi-Zeng Hsieh*, Shih-Ching Yeh, Shih-Chieh Lin, Shu-Fang Lee, Kai-Ping Tseng", title: "Depth-Sensor-Based Monitoring of Therapeutic Exercises", venue: "Sensors, vol. 15, no. 10, pp. 25628–25647, Oct. 2015", tags: ["SCI", "Q1"] },
    { type: "journal", year: 2015, authors: "A. Y. S. Su*, S. J. H. Yang, C. S. J. Huang, T. J. Ding, Yi-Zeng Hsieh", title: "Effects of Annotations and Homework on Learning Achievement: An Empirical Study of Scratch Programming Pedagogy", venue: "Educational Technology & Society, vol. 18, no. 4, pp. 331–343, Oct. 2015", tags: ["SSCI"] },
    { type: "journal", year: 2015, authors: "Chien-Hsing Chou*, Yi-Hsiang Chien, Yung-Long Chu, Yi-Zeng Hsieh", title: "AutismSpace: A Visualized Scenario Learning Aid on Tablet PC for Chinese Children with High-Functioning Autism", venue: "Journal of Applied Science and Engineering, vol. 18, no. 1, pp. 89–95, 2015", tags: ["EI"] },
    { type: "journal", year: 2014, authors: "Yi-Zeng Hsieh, Mu-Chun Su*, Pa-Chun Wang", title: "A PSO-Based Rule Extractor for Medical Diagnosis", venue: "Journal of Biomedical Informatics, vol. 49, pp. 53–60, Jun. 2014", tags: ["SCI"] },
    { type: "journal", year: 2014, authors: "Yi-Zeng Hsieh, Mu-Chun Su*, Chen-Hsu Wang, Pa-Chun Wang", title: "Prediction of Survival of ICU Patients Using Computational Intelligence", venue: "Computers in Biology and Medicine, vol. 47, pp. 13–19, 2014", tags: ["SCI"] },
    { type: "journal", year: 2014, authors: "C. H. Chou*, Yi-Zeng Hsieh, M. C. Su", title: "A New Measure of Cluster Validity Using Line Symmetry", venue: "Journal of Information Science and Engineering, vol. 30, no. 2, pp. 443–461, 2014", tags: ["SCI"] },
    { type: "journal", year: 2013, authors: "Yi-Zeng Hsieh, M. C. Su, Sherry Y. Chen*, G. D. Chen", title: "The Development of a Robot-Based Learning Companion: A User-Centered Design Approach", venue: "Interactive Learning Environments, vol. 23, pp. 356–372, 2013", tags: ["SSCI"] },
    { type: "journal", year: 2012, authors: "M. C. Su*, C. Y. Yeh, Yi-Zeng Hsieh, S. C. Lin, P. C. Wang", title: "An Image-Based Mouth Switch for People with Severe Disabilities", venue: "Recent Patents on Computer Science, vol. 5, no. 1, pp. 66–71, Mar. 2012", tags: ["EI"] },
    { type: "journal", year: 2012, authors: "C. H. Chou*, Yi-Zeng Hsieh, C. Y. Tsai", title: "Modified Sequential Floating Search Algorithm with a Novel Ranking Method", venue: "International Journal of Innovative Computing, Information and Control, vol. 8, no. 3, pp. 2089–2100, Mar. 2012", tags: ["SCI"] },
    { type: "journal", year: 2011, authors: "M. C. Su*, S. C. Lai, P. C. Wang, Yi-Zeng Hsieh, S. C. Lin", title: "A SOMO-Based Approach to the Operating Room Scheduling Problem", venue: "Expert Systems with Applications, vol. 38, no. 12, pp. 15447–15454, Nov. 2011", tags: ["SCI"] },
    { type: "journal", year: 2011, authors: "Yi-Zeng Hsieh, M. C. Su*, C. H. Chou, P. C. Wang", title: "Detection of Line-Symmetry Clusters", venue: "International Journal of Innovative Computing, Information and Control, vol. 7, no. 8, pp. 5027–5043, Aug. 2011", tags: ["SCI"] },
    { type: "journal", year: 2010, authors: "M. C. Su*, S. J. Wang, C. K. Huang, P. C. Wang, F. H. Hsu, S. C. Lin, Yi-Zeng Hsieh", title: "A Signal-Representation-Based Parser to Extract Text-Based Information from the Web", venue: "Journal of Advanced Computational Intelligence and Intelligent Informatics, vol. 14, no. 5, pp. 531–539, 2010", tags: ["EI"] },
    { type: "journal", year: 2010, authors: "Y. X. Zhao*, C. H. Chou, M. C. Su, Yi-Zeng Hsieh", title: "Portable Virtual Piano Design", venue: "World Academy of Science, Engineering and Technology, issue 67, pp. 1024–1027, Jul. 2010", tags: ["EI"] },
    { type: "journal", year: 2008, authors: "J. H. Chen*, M. C. Su, Y. X. Zhao, Yi-Zeng Hsieh, W. H. Chen", title: "Application of SOMO-Based Clustering in Building Renovation", venue: "International Journal of Fuzzy Systems, vol. 10, no. 3, pp. 195–201, Sep. 2008", tags: ["SCI"] },

    // ---- Book chapter ----
    { type: "chapter", year: 2008, authors: "M. C. Su, Y. Z. Hsieh, D. Y. Huang, Y. X. Zhao, C. C. Sun", title: "A Vision-Based Travel Aid for the Blind", venue: "In E. A. Zoeller (Ed.), Pattern Recognition Theory and Application, pp. 73–89. Nova Science Publishers, New York, 2008" },

    // ---- Conference papers ----
    { type: "conference", year: 2026, authors: "Y.-Z. Hsieh, C.-H. Lin, M.-C. Su", title: "Digital Twin-Driven Power Demand Forecasting for Sustainable Data Centers via Federated Learning on H100 GPU Clusters", venue: "In: C. Xu (Ed.), Machine Learning and Soft Computing (ICMLSC 2026), Communications in Computer and Information Science, vol. 2948, Springer, Singapore, 2027", doi: "10.1007/978-981-92-1546-1_1" },
    { type: "conference", year: 2026, authors: "Y.-M. Liu, Y.-Z. Hsieh", title: "Panoptic Segmentation for Intelligent Fishing Port Environment Recognition Using Mask2Former", venue: "IEEE 2nd International Conference on Consumer Technology (ICCT-Pacific), Yamaguchi, Japan, 2026, pp. 564–567", doi: "10.1109/ICCT-Pacific69083.2026.11518745" },
    { type: "conference", year: 2026, authors: "Su-Yuan Yan, Xin Kang, Cheng-Hou Chou, Yi-Zeng Hsieh", title: "Density-Aware Vision Transformer with Adaptive Spatial-Channel Attention for Weakly-Supervised Crowd Counting", venue: "Proceedings of the 8th International Conference on Control and Computer Vision (ICCCV '26), 2026" },
    { type: "conference", year: 2026, authors: "Y.-X. Zhao, Yi-Zeng Hsieh, et al.", title: "The Design of Cartoon-Style Products Based on Generative AI: The Wind Lion God", venue: "8th International Conference on Computer Communication and the Internet (ICCCI), Okayama, Japan, 2026, pp. 146–151", doi: "10.1109/ICCCI70321.2026.11666530" },
    { type: "conference", year: 2026, authors: "Y. Lee, Y.-X. Zhao, M.-C. Su, Y.-Z. Hsieh", title: "Bird Species Identification via BiRefNet-Based Background Removal and EfficientNet Transfer Learning", venue: "IEEE International Conference on Consumer Electronics – Taiwan (ICCE-Taiwan), Taoyuan, Taiwan, 2026, pp. 31–32", doi: "10.1109/ICCE-Taiwan71481.2026.11652376" },
    { type: "conference", year: 2025, authors: "Y.-Z. Hsieh, P.-Y. Su, C.-H. Chou", title: "Trajectory Prediction for Smart Intersections Using Deep Neural Networks with Spatiotemporal Attention", venue: "IEEE 14th Global Conference on Consumer Electronics (GCCE), Osaka, Japan, 2025, pp. 289–290", doi: "10.1109/GCCE65946.2025.11274782" },
    { type: "conference", year: 2025, authors: "Y. A. Pratama, T. E. N. Pandin, Y.-Z. Hsieh", title: "Dynamic Facial Expression Recognition in the Wild Using Mamba-Style Selective SSM and Facial Attention Mechanism", venue: "APSIPA Annual Summit and Conference (APSIPA ASC), Singapore, 2025, pp. 2371–2375", doi: "10.1109/APSIPAASC65261.2025.11249002" },
    { type: "conference", year: 2025, authors: "K.-W. Tan, Y.-X. Lin, Y.-Z. Hsieh", title: "Enhancing Online Learning Through Dynamic Facial Expression Recognition and Few-Shot Action Recognition", venue: "IEEE International Conference on Consumer Electronics – Taiwan (ICCE-Taiwan), Kaohsiung, 2025, pp. 137–138", doi: "10.1109/ICCE-Taiwan66881.2025.11208133", award: "Best Presentation Award" },
    { type: "conference", year: 2025, authors: "Z.-Y. Lin, C. Chen, Y.-Z. Hsieh", title: "A Depth Camera-Based Pointing Control System for Appliance Interaction", venue: "7th International Conference on Computer Communication and the Internet (ICCCI), Tokushima, Japan, 2025, pp. 107–111", doi: "10.1109/ICCCI65070.2025.11158373", award: "Best Presentation Award" },
    { type: "conference", year: 2025, authors: "Y.-Z. Hsieh", title: "A Portable Air Quality Monitoring and Route Optimization System Using Q-Learning Swarm Optimization", venue: "International Conference on Applied System Innovation (ICASI), Tokyo, Japan, 2025, pp. 245–247", doi: "10.1049/icp.2025.2541" },
    { type: "conference", year: 2025, authors: "C. Chen, Y.-Z. Hsieh, et al.", title: "Latent Space Denoising Model for High-Precision 3D Cardiac Model Generation", venue: "1st International Conference on Consumer Technology (ICCT-Pacific), Matsue, Japan, 2025, pp. 1–2", doi: "10.1109/ICCT-Pacific63901.2025.11012812" },
    { type: "conference", year: 2024, authors: "Y.-Z. Hsieh, C.-H. Chou, D.-Y. Huang, C.-H. Wu, C. Chen", title: "Enhancing Autonomous Vehicle Decision-Making in Construction Zones Using Construction Signage Recognition and Vehicle Trajectory Tracking Algorithms", venue: "7th International Conference on Knowledge Innovation and Invention (ICKII 2024), Lecture Notes in Electrical Engineering, vol. 1481, Springer", doi: "10.1007/978-981-95-2113-5_17", award: "Best Paper Award" },
    { type: "conference", year: 2024, authors: "Y.-X. Lin, X.-Y. Cheng, K.-W. Tan, Y.-Y. Syu, Y.-Z. Hsieh", title: "Addressing Language and User-Interaction Through YouTube Based on Deep Learning", venue: "6th International Conference on Computer Communication and the Internet (ICCCI), Tokyo, Japan, 2024, pp. 187–192", doi: "10.1109/ICCCI62159.2024.10674487" },
    { type: "conference", year: 2024, authors: "C.-H. Wu, Y.-X. Zhao, C.-H. Chou, Y.-Z. Hsieh", title: "Kinmen Wind Lion Face Generation Based on the Deep Convolutional Generative Adversarial Network", venue: "IEEE 13th Global Conference on Consumer Electronics (GCCE), Kitakyushu, Japan, 2024, pp. 508–509", doi: "10.1109/GCCE62371.2024.10760812", award: "Best Presentation Award" },
    { type: "conference", year: 2024, authors: "Q.-B. Zhang, P.-Y. Chi, S.-Z. Lin, C.-X. Wu, Y.-Z. Hsieh", title: "Blurred Facial Recognition Based on AdaFace", venue: "IEEE 48th Annual Computers, Software, and Applications Conference (COMPSAC), Osaka, Japan, 2024, pp. 1492–1493", doi: "10.1109/COMPSAC61105.2024.00204" },
    { type: "conference", year: 2023, authors: "Yi-Zeng Hsieh, Hau-Ching Chen, Yi-Hung Yeh", title: "Object Detection via Fisheye Camera", venue: "5th ACM International Conference on Multimedia in Asia (MMAsia '23), Article 112, pp. 1–7", doi: "10.1145/3595916.3628351", award: "1st Place, Fisheye Detection Challenge" },
    { type: "conference", year: 2023, authors: "P.-Y. Su, C.-K. Lin, J.-B. Chou, Yi-Zeng Hsieh", title: "Self-Attention Deep Neural Network for Vehicle Tracking (in Chinese)", venue: "28th Conference on Technologies and Applications of Artificial Intelligence (TAAI), Taiwan, Dec. 2023" },
    { type: "conference", year: 2023, authors: "Yi-Zeng Hsieh, Chia-Hsuan Wu, Cheng-Hou Chou, Hsin-Yu Huang, Chi-Kuang Lin", title: "The Intelligent Fish Weight Grading System Based on Instance Segmentation Algorithm", venue: "IET 13th International Conference on Frontier Computing (FC 2023), Tokyo, Japan, 2023", award: "Artificial Intelligence Award" },
    { type: "conference", year: 2023, authors: "Y.-Z. Hsieh, F.-H. Nan, C.-H. Wu, C.-H. Chou", title: "Underwater Unmanned Vehicles Net-Breaking Detection and Recognition System Based on YOLO", venue: "IEEE 6th International Conference on Knowledge Innovation and Invention (ICKII), Sapporo, Japan, 2023, pp. 794–797", doi: "10.1109/ICKII58656.2023.10332697", award: "Best Paper Award" },
    { type: "conference", year: 2023, authors: "Yi-Zeng Hsieh, Chia-Hsuan Wu, Cheng-Hou Chou, Chia-Ching Teng, Chih-Hsiang Ho", title: "Detecting the Underwater Distance and Swimming Direction of Tilapia Using YOLO", venue: "IEEE International Conference on Consumer Electronics – Taiwan (ICCE-Taiwan), Pingtung, 2023, pp. 267–268", doi: "10.1109/ICCE-Taiwan58799.2023.10226689" },
    { type: "conference", year: 2023, authors: "Fan-Hua Nan, Yi-Zeng Hsieh, Hao-Ching Chen", title: "Coral Detection with Machine Learning", venue: "5th International Conference on Computer Communication and the Internet (ICCCI), Fujisawa, Japan, 2023, pp. 207–209", doi: "10.1109/ICCCI59363.2023.10210179" },
    { type: "conference", year: 2022, authors: "Yi-Zeng Hsieh, Yen-Hsun Meng, Yi-Cheng Ku", title: "OpenPose-Based Classification System for Cobia Broodstock (in Chinese)", venue: "35th IPPR Conference on Computer Vision, Graphics, and Image Processing (CVGIP 2022), Nantou, Taiwan" },
    { type: "conference", year: 2022, authors: "Y.-T. Chen, C.-H. Wu, L.-W. Wang, Y.-C. Ku, C.-C. Teng, Yi-Zeng Hsieh", title: "Deep Learning for Pineapple Ripeness Analysis (in Chinese)", venue: "20th Conference on Information Technology and Applications in Outlying Islands (ITAOI 2022), Penghu, Taiwan" },
    { type: "conference", year: 2021, authors: "N. Ubiña, S.-Y. Cai, S.-C. Cheng, C.-C. Chang, Y.-Z. Hsieh", title: "Underwater 3D Object Reconstruction for Fish Length Estimation Using Convolutional Neural Networks", venue: "International Symposium on Intelligent Signal Processing and Communication Systems (ISPACS), 2021, pp. 1–2", doi: "10.1109/ISPACS51563.2021.9651057" },
    { type: "conference", year: 2021, authors: "K.-H. Peng, P.-Y. Su, C.-H. Wu, C.-C. Teng, Y.-H. Chiang, C.-H. Lai, Yi-Zeng Hsieh*", title: "YOLOv4 Based on Fuzzified Outputs (in Chinese)", venue: "19th Conference on Information Technology and Applications in Outlying Islands (ITAOI 2021), Kinmen, Taiwan" },
    { type: "conference", year: 2020, authors: "Y.-H. Huang, Y.-Z. Hsieh", title: "The Assisted Environment Information for Blind Based on Video Captioning Method", venue: "IEEE International Conference on Consumer Electronics – Taiwan (ICCE-Taiwan), 2020, pp. 1–2", doi: "10.1109/ICCE-Taiwan49838.2020.9258088" },
    { type: "conference", year: 2019, authors: "W.-R. Hsueh, Yi-Zeng Hsieh", title: "YOLO-Based Recognition of Tilapia Distance and Swimming Direction (in Chinese)", venue: "24th Conference on Technologies and Applications of Artificial Intelligence (TAAI 2019), Kaohsiung, Taiwan" },
    { type: "conference", year: 2019, authors: "Yi-Zeng Hsieh, Fu-Xiang Hsu, Yen-Chieh Yu, Chih-Wei Tu, Chih-Yi Wu, Teng-Yu Lu", title: "Internet of Things Portable Air Quality Device Based on Genetic Algorithm", venue: "International Cognitive Cities Conference (IC3), Kyoto, Japan, Sep. 2019" },
    { type: "conference", year: 2019, authors: "Yi-Zeng Hsieh*, Fu-Xiong Xu", title: "Autonomous Orbit Pattern Recognition Algorithm Based on Deep Learning", venue: "IEEE International Conference on Applied System Innovation (ICASI), Fukuoka, Japan, Apr. 2019", award: "CVGIP Best Paper (extended version)" },
    { type: "conference", year: 2019, authors: "Yi-Zeng Hsieh*, Shih-Wei Tan, Siang-Long Gu, Fu-Xiong Xu", title: "Prediction of Battery Discharge Status Based on Recurrent Neural Network", venue: "2nd International Conference on Electronics, Computer Engineering and Electrical Engineering (ECEEE), Osaka, Japan, Jan. 2019" },
    { type: "conference", year: 2018, authors: "Yi-Zeng Hsieh", title: "The Internet of Things Pillow Detecting Sleeping Quality", venue: "1st International Cognitive Cities Conference (IC3), Okinawa, Japan, Aug. 2018" },
    { type: "conference", year: 2018, authors: "Yi-Zeng Hsieh, F.-H. Hsu, C.-Y. Chen, Y.-C. Luo, H.-L. Ku", title: "A Wearable Guide Device for the Blind Combining Image Streaming and Deep Learning (in Chinese)", venue: "17th Conference on Information Technology and Applications in Outlying Islands (ITAOI 2018), Penghu, Taiwan" },
    { type: "conference", year: 2018, authors: "Yi-Zeng Hsieh, et al.", title: "Robotic-Assisted Based on ARCS Motivation Model in E-Learning Application", venue: "4th IEEE International Conference on Applied System Innovation (ICASI), Chiba, Japan, 2018", award: "Best Paper Award" },
    { type: "conference", year: 2017, authors: "Yi-Zeng Hsieh, Mu-Chun Su, Yu-Lin Jeng", title: "The Jacobian Matrix-Based Learning Machine in Student", venue: "2nd International Symposium on Emerging Technologies for Education (SETE 2017), Cape Town, South Africa, Sep. 2017" },
    { type: "conference", year: 2015, authors: "Yi-Zeng Hsieh, Mu-Chun Su, Addison Y. S. Su, Wu-Rong Shih, Jen-Chih Yu, Chien-Yeh Huang", title: "The Computational Rules Extractor in the Detection of Tax Evasion", venue: "49th IEEE International Carnahan Conference on Security Technology, Taipei, Sep. 2015" },
    { type: "conference", year: 2015, authors: "Yi-Zeng Hsieh, Chen-Hsu Wang, Mu-Chun Su, Ching-Hu Lu, Jen-Chih Yu, Yi-Min Chiang", title: "Prediction of Postoperative Recovery Based on a Computational Rules Extractor", venue: "IEEE International Conference on Consumer Electronics – Taiwan (ICCE-TW), Taipei, Jun. 2015" },
    { type: "conference", year: 2015, authors: "Yi-Zeng Hsieh, Chien-Hsing Chou, Yu-Xiang Zhao, Chen-Hsu Wang, Addison Y. S. Su, Wu-Rong Shih, Jen-Chih Yu, Shu-Wei Lin", title: "The Gesture Recognition System Based on Self-Organization-Map in Total Physical Response English Learning Application", venue: "International Conference on Applied System Innovation (ICASI 2015), Osaka, Japan, May 2015", award: "Best Paper Award" },
    { type: "conference", year: 2015, authors: "W.-H. Hsieh, S.-Y. Lu, Yi-Zeng Hsieh, Y.-S. Tsai", title: "Touch-Based Interactive Interface Design for Children's Mobile Phones (in Chinese)", venue: "20th Mobile Computing Workshop, Taiwan, Aug. 2015" },
    { type: "conference", year: 2015, authors: "Yi-Zeng Hsieh, et al.", title: "Development and Application of the Companion Robot 'Kido Robot' (in Chinese)", venue: "17th Cross-Strait Conference on Information Technology, Taiwan, Jun. 2015" },
    { type: "conference", year: 2015, authors: "Yi-Zeng Hsieh, et al.", title: "Design of an Assistive Assessment System for the Treatment of Children with ADHD (in Chinese)", venue: "10th Conference on Digital Teaching and Information Practice (EITS 2015), Taiwan, Mar. 2015" },
    { type: "conference", year: 2015, authors: "M.-C. Kan, Y.-X. Zhao, Yi-Zeng Hsieh, et al.", title: "Interactive Motion-Sensing Water Curtain Based on Hand Trajectory Recognition (in Chinese)", venue: "10th Conference on Digital Teaching and Information Practice (EITS 2015), Taiwan, Mar. 2015" },
    { type: "conference", year: 2014, authors: "Yi-Zeng Hsieh, C. H. Chou, H. L. Chen, Y. X. Zhao, Y. K. Wu, K. W. Li", title: "Using Knock as Input Method for Designing the Home Security System", venue: "2nd International Conference on Intelligent Systems and Image Processing (ICISIP), Japan, Sep. 2014" },
    { type: "conference", year: 2013, authors: "C. H. Chou, Yi-Zeng Hsieh, M. C. Su, Y. L. Chu", title: "Extracting and Labelling the Objects from an Image by Using the Fuzzy Clustering Algorithm and a New Cluster Validity", venue: "International Conference on Information Computer Application, 2013" },
    { type: "conference", year: 2012, authors: "M. C. Su, T. H. Hsio, Yi-Zeng Hsieh, S. C. Lin, C. H. Chou", title: "A Neural Network-Based Sketch Recognition System", venue: "IEEE International Symposium on Intelligent Signal Processing and Communication Systems (ISPACS), New Taipei City, 2012, pp. 420–423" },
    { type: "conference", year: 2012, authors: "M. C. Su, C. T. Wu, Yi-Zeng Hsieh, S. C. Lin, D. Y. Huang", title: "A Depth-Camera-Based Approach to 3D Object Recognition", venue: "CACS International Automatic Control Conference, Yunlin, Taiwan, Nov. 2012" },
    { type: "conference", year: 2011, authors: "Y. X. Zhao, Yi-Zeng Hsieh, H. P. Tai, C. H. Chou", title: "A Novel Feature Selection Algorithm by Using False Feature", venue: "International Conference on Electrical, Computer, Electronics and Communication Engineering (ICECECE 2011), Paris, 2011" },
    { type: "conference", year: 2010, authors: "Yi-Zeng Hsieh, M. C. Su, S. Y. Chen, G. D. Chen, S. C. Lin", title: "A Robot-Based Learning Companion for Storytelling", venue: "18th International Conference on Computers in Education (ICCE), Putrajaya, Malaysia, 2010" },
    { type: "conference", year: 2009, authors: "M. C. Su, G. D. Chen, Y. S. Tsai, R. H. Yao, C. K. Chou, Y. B. Jinawi, D. Y. Huang, Yi-Zeng Hsieh, S. C. Lin", title: "Design of an Interactive Table for Mixed-Reality Learning Environments", venue: "4th International Conference on E-Learning and Games (Edutainment 2009), Banff, Canada, pp. 489–494" },
    { type: "conference", year: 2008, authors: "M. C. Su, D. Y. Huang, S. C. Lin, Yi-Zeng Hsieh, G. D. Chen", title: "Application of a Learning-Companion Robot in Learning Environments", venue: "2nd IEEE International Conference on Digital Games and Intelligent Toys Based Education (DIGITEL), 2008, pp. 203–204" },
    { type: "conference", year: 2006, authors: "M. C. Su, Yi-Zeng Hsieh, Y. X. Zhao", title: "A Simple Approach to Stereo Matching and Its Application in Developing a Travel Aid for the Blind", venue: "11th International Conference on Fuzzy Theory and Technology, Kaohsiung, Taiwan, Oct. 2006, pp. 1228–1231" },
    { type: "conference", year: 2005, authors: "M. C. Su, Yi-Zeng Hsieh, W. Y. Lee, C. Y. Yeh, Y. X. Zhao, D. Y. Huang", title: "An SoC-Based Rear-View Camera Safety Assistance System (in Chinese)", venue: "13th National Conference on Fuzzy Theory and Its Applications, Kaohsiung, Taiwan, 2005" }
  ],

  /* ---------- Patents ---------- */
  patents: [
    { year: 2025, kind: "Invention", region: "US", number: "Appl. No. 18/842,794", title: "Surgical Navigation System and Method Thereof" },
    { year: 2024, kind: "Invention", region: "TW", number: "TW 202402246 A", title: "Surgical Navigation System and Method of Use" },
    { year: 2023, kind: "Invention", region: "TW", number: "I799962", title: "AI-Based Method and System for Determining the Appetite of Farmed Fish Schools" },
    { year: 2022, kind: "Invention", region: "TW", number: "I778762", title: "Smart Aquaculture Fish Estimation Method and System" },
    { year: 2022, kind: "Invention", region: "TW", number: "I776618", title: "Steel Ladle Receiving Recognition System and Method" },
    { year: 2020, kind: "Invention", region: "TW", number: "I705760", title: "Automated Aquaculture Cage Submersion System" },
    { year: 2014, kind: "Invention", region: "US", number: "US 8,723,676 B2", title: "Rehabilitation-Assisting Apparatus" },
    { year: 2014, kind: "Invention", region: "TW", number: "I429468", title: "Rehabilitation-Assisting Device" },
    { year: 2013, kind: "Invention", region: "TW", number: "I413034", title: "System Combining Augmented Reality and E-Learning" },
    { year: 2013, kind: "Invention", region: "TW", number: "I406202", title: "Leader-Following Robot System, Control Method, and Computer Program Product" },
    { year: 2013, kind: "Invention", region: "TW", number: "I402784", title: "Motion-Detection-Based Music Creation and Play System, Control Method, and Computer Program Product" },
    { year: 2022, kind: "Utility Model", region: "TW", number: "M6262230", title: "Monitoring Vessel" },
    { year: 2022, kind: "Utility Model", region: "TW", number: "M625369", title: "Smart Buoy" },
    { year: 2022, kind: "Utility Model", region: "TW", number: "M623942", title: "Feeding Equipment for Aquaculture" },
    { year: 2021, kind: "Utility Model", region: "TW", number: "M615352", title: "Smart Aquaculture System" },
    { year: 2019, kind: "Utility Model", region: "TW", number: "M578910", title: "Real-Time Underwater Image Transmission System" },
    { year: 2019, kind: "Utility Model", region: "TW", number: "M578511", title: "Offshore Aquaculture Feed Supply System" }
  ],

  /* ---------- Research grants ---------- */
  grants: [
    { period: "2024/11 – 2025/12", role: "PI", title: "Diffusion Models on the NVIDIA Platform", sponsor: "Industry (Yingchuang Information Services)" },
    { period: "2024/11 – 2025/02", role: "PI", title: "Generative AI Modeling of Temporal Environmental Factors and Power-Outage Households for Typhoons Gaemi and Krathon Using Diffusion Models", sponsor: "Taiwan Power Company" },
    { period: "2024/07 – 2025/06", role: "Co-PI", title: "Flagship Startup Program: Mixed-Reality Navigation System for Total Hip Arthroplasty", sponsor: "NSTC" },
    { period: "2024/01 – 2025/03", role: "PI", title: "Key Generative AI Technologies for Autonomous Driving Systems", sponsor: "Industry (Yingchuang Information Services)" },
    { period: "2023/08 – 2025/07", role: "Co-PI", title: "Intelligent Badminton Training Assistance — Subproject 5: Smart Shuttlecock Launcher with Multiple Shot Types", sponsor: "NSTC" },
    { period: "2023/07 – 2024/06", role: "Co-PI", title: "Startup Program: MR-Assisted System for Total Hip Arthroplasty", sponsor: "NSTC" },
    { period: "2023/01 – 2023/12", role: "PI", title: "Intelligent Cage Aquaculture Model", sponsor: "Fisheries Agency, Council of Agriculture" },
    { period: "2022/12 – 2023/12", role: "PI", title: "Energy Consumption Forecasting and Anomaly Early Warning", sponsor: "Industry (Haobo International Services)" },
    { period: "2022/09 – 2023/08", role: "PI", title: "SPARK Program (FJU, NTHU & NTUST)", sponsor: "SPARK Taiwan" },
    { period: "2022/08 – 2025/07", role: "PI", title: "Deep-Learning-Based Electronic Assistive Device Helping Visually Impaired Students in Remote Areas Commute to School", sponsor: "NSTC" },
    { period: "2022/08 – 2025/07", role: "PI", title: "Deep-Learning-Based Automated Guided Vehicle System for Smart Fishing Ports", sponsor: "NSTC" },
    { period: "2022/08 – 2025/07", role: "Co-PI", title: "A General Freshness Index for Aquaculture Crustaceans Using Multispectral Scanning and Deep Learning", sponsor: "NSTC" },
    { period: "2022/01 – 2023/10", role: "PI", title: "Case Studies of Artificial Intelligence in the Satellite Industry", sponsor: "Industrial Technology Research Institute (ITRI)" },
    { period: "2022/01 – 2022/12", role: "PI", title: "Intelligent Cage Aquaculture Model", sponsor: "Fisheries Agency, Council of Agriculture" },
    { period: "2022/01 – 2022/12", role: "PI", title: "Multi-Factor-Assisted Vehicle Positioning System for Container Yards", sponsor: "Institute for Information Industry (III)" },
    { period: "2021/08 – 2022/07", role: "PI", title: "Stereo Vision and Deep Learning for Assisting Autonomous Vehicles in Road Construction Zones", sponsor: "MOST" },
    { period: "2021/01 – 2022/12", role: "PI", title: "International Industry–Academia Alliance: Image Recognition of Cobia Broodstock Behavior and Spawning", sponsor: "Hengchun Ocean Co." },
    { period: "2021/01 – 2021/12", role: "PI", title: "Automatic Recognition and Analysis of Coastal Fish Catches", sponsor: "Institute for Information Industry (III)" },
    { period: "2021/01 – 2021/12", role: "Co-PI", title: "Intelligent Cage Aquaculture Model", sponsor: "Fisheries Agency, Council of Agriculture" },
    { period: "2020/11 – 2021/10", role: "PI", title: "Visualized Intelligent Decision System for Footwear Manufacturing Process Optimization", sponsor: "MOST" },
    { period: "2020/08 – 2021/07", role: "PI", title: "Underwater Unmanned Vehicle with Stereo Vision and Robotic Arm", sponsor: "MOST" },
    { period: "2020/01 – 2020/12", role: "PI", title: "Requirements Assessment for Smart Manufacturing Cloud Services", sponsor: "Industrial Technology Research Institute (ITRI)" },
    { period: "2020/01 – 2020/12", role: "Co-PI", title: "Intelligent Cage Aquaculture Model", sponsor: "Fisheries Agency, Council of Agriculture" },
    { period: "2019/05 – 2020/04", role: "Co-PI", title: "Design Safety and O&M Management Assessment for Offshore Wind Development", sponsor: "China Steel Corporation" },
    { period: "2018/08 – 2020/07", role: "PI", title: "Image- and Deep-Learning-Based Guide Robot for the Visually Impaired", sponsor: "MOST" },
    { period: "2018/08 – 2019/07", role: "PI", title: "Deep-Learning-Based ORC Cloud Monitoring Platform", sponsor: "Industrial Technology Research Institute (ITRI)" },
    { period: "2018/01 – 2021/12", role: "Co-PI", title: "Intelligent Care Interaction System — A Smart Companion for the Visually Impaired", sponsor: "MOST" },
    { period: "2018/01 – 2021/12", role: "Co-PI", title: "AI Technologies for Smart Aquaculture Systems", sponsor: "MOST" },
    { period: "2018/01 – 2020/12", role: "Co-PI", title: "Big Medical Image Database of the Taipei Medical University Healthcare System", sponsor: "MOST" },
    { period: "2017/08 – 2018/07", role: "PI", title: "Robot-Companion-Based Interactive System for Children with Tourette Syndrome", sponsor: "MOST" },
    { period: "2015/08 – 2016/07", role: "PI", title: "Cloud POS Recommendation System", sponsor: "MOST" },
    { period: "2015/01 – 2017/12", role: "Co-PI", title: "Visualized 3D Integrated Atmospheric–Oceanic Battlefield Intelligence Platform", sponsor: "MOST" },
    { period: "2014/08 – 2015/07", role: "PI", title: "Advanced Technologies for Interactive Behavior Modeling", sponsor: "Institute for Information Industry (III)" }
  ],

  educationGrants: [
    { period: "2020/08 – 2021/07", role: "PI", title: "Teaching Practice Research Program", sponsor: "Ministry of Education" },
    { period: "2019/03 – 2020/03", role: "Co-PI", title: "Design Thinking Cross-Disciplinary Talent Cultivation Program", sponsor: "Ministry of Education" },
    { period: "2018/02 – 2019/01", role: "Co-PI", title: "ICT Software Innovation Talent Program (Class A)", sponsor: "Ministry of Education" },
    { period: "2013 – 2019", role: "Co-PI", title: "National Microcomputer Application System Design Competition & National Software Creation Competition (six editions)", sponsor: "Ministry of Education" }
  ],

  /* ---------- Honors & awards ----------
     cat: "personal" | "paper" | "student"                                    */
  honors: [
    { year: 2026, cat: "personal", text: "Editor-in-Chief, Discover Computing" },
    { year: 2026, cat: "personal", text: "Editor-in-Chief, Journal of Artificial Intelligence and Science Communication" },
    { year: 2026, cat: "personal", text: "Scholar ranking: #155 worldwide and #6 in Taiwan" },
    { year: 2026, cat: "personal", text: "Top 5% worldwide in Electrical Engineering" },
    { year: 2026, cat: "paper", text: "Best Paper Award, 16th National Conference on Web Intelligence and Applications (NCWIA) — student advisee" },
    { year: 2026, cat: "student", text: "Future Technology Award, Taiwan Innotech Expo" },
    { year: 2026, cat: "student", text: "1st Place, Logitech Corporate Award, MakeNTU 2026" },
    { year: 2026, cat: "student", text: "3rd Place (University Division), Micromouse Maze Robot Challenge" },
    { year: 2026, cat: "student", text: "Honorable Mention, AI Smart Innovation Competition" },
    { year: 2025, cat: "personal", text: "ScholarGPS Top 5% Scholar" },
    { year: 2025, cat: "personal", text: "Research-Active Scholar, Dept. of Electrical Engineering, NTUST" },
    { year: 2025, cat: "paper", text: "Best Paper Award, 2025 ICNCC" },
    { year: 2025, cat: "paper", text: "Best Paper Award, 8th International Conference on Knowledge Innovation and Invention (ICKII 2025)" },
    { year: 2025, cat: "paper", text: "Best Presentation Award, IEEE AVSS 2025" },
    { year: 2025, cat: "paper", text: "Best Presentation Award, 7th ICCCI 2025" },
    { year: 2025, cat: "paper", text: "Best Presentation Award, IEEE ICCE-Taiwan 2025" },
    { year: 2025, cat: "paper", text: "Best Paper Award, NCWIA 2025" },
    { year: 2025, cat: "paper", text: "Two Best Paper Awards, 23rd Conference on Information Technology and Applications in Outlying Islands (ITAOI)" },
    { year: 2025, cat: "student", text: "Gold Medal, IET Fi-Award 2025 (Osaka, Japan)" },
    { year: 2025, cat: "student", text: "Gold and Silver Medals, International Invention Exhibition, Croatia" },
    { year: 2025, cat: "student", text: "1st Place, Taipower Thematic Competition" },
    { year: 2025, cat: "student", text: "1st Place (Information Application Track), National Information Application Service Innovation Competition" },
    { year: 2025, cat: "student", text: "Most Popular Project Award, NTUST EE Department — Autonomous Tomato-Harvesting Vehicle" },
    { year: 2024, cat: "personal", text: "Outstanding Research Award, NTUST" },
    { year: 2024, cat: "personal", text: "Teaching Excellence Award, NTUST" },
    { year: 2024, cat: "personal", text: "IEEE Senior Member; Technical Committee Member, IEEE Consumer Technology Society" },
    { year: 2024, cat: "paper", text: "Best Paper Award, 7th IEEE ICKII 2024" },
    { year: 2024, cat: "paper", text: "Best Presentation Award, IEEE GCCE 2024" },
    { year: 2024, cat: "paper", text: "Best Paper Award, NCWIA 2024" },
    { year: 2024, cat: "student", text: "National Innovation Award — MR-Assisted System for Total Hip Arthroplasty" },
    { year: 2024, cat: "student", text: "2nd Place & Cross-Domain Special Award, National Smart Innovation and Cross-Domain Integration Competition" },
    { year: 2024, cat: "student", text: "1st Place, NTUST EE Senior Project Competition" },
    { year: 2023, cat: "personal", text: "Outstanding Young Scholar Award, Consumer Electronics Society of Taiwan" },
    { year: 2023, cat: "personal", text: "1st Place in all four tracks (object, pedestrian, bicycle, motorcycle), ACM Multimedia Asia Fisheye Detection Challenge" },
    { year: 2023, cat: "paper", text: "Best Paper Award, 6th IEEE ICKII 2023" },
    { year: 2023, cat: "student", text: "Artificial Intelligence Award, IET 13th International Conference on Frontier Computing (Tokyo)" },
    { year: 2023, cat: "student", text: "1st Place, NTUST EE Senior Project Competition — Blurred Face Recognition System" },
    { year: 2022, cat: "student", text: "1st Place (Asia Silicon Valley Track), MOEA Information Application Service Innovation Competition" },
    { year: 2021, cat: "personal", text: "MOST Award for Recruiting and Retaining Outstanding Talent (also 2020)" },
    { year: 2021, cat: "personal", text: "Research Progress Award, Journal Paper Award, and Social Service Award, National Taiwan Ocean University" },
    { year: 2021, cat: "student", text: "Gold Medal, MOE Smart Chip System Application Innovation Competition" },
    { year: 2021, cat: "student", text: "1st Place, 26th National Information Application Service Innovation Competition" },
    { year: 2020, cat: "student", text: "Silver Medal, IET Frontier Innovation Award (Singapore)" },
    { year: 2020, cat: "student", text: "1st Place, National Smart Innovation and Cross-Domain Integration Competition" },
    { year: 2020, cat: "personal", text: "Social Service Award, National Taiwan Ocean University" },
    { year: 2019, cat: "personal", text: "National Innovation Award — AI Technologies for Smart Aquaculture Systems" },
    { year: 2019, cat: "paper", text: "Best Paper Award, CVGIP 2019" },
    { year: 2019, cat: "student", text: "Technology Award, Taiwan Innotech Expo — Guide Robot for the Visually Impaired" },
    { year: 2018, cat: "personal", text: "Outstanding Research Faculty Award (College Level), National Taiwan Ocean University (2018–2021)" },
    { year: 2018, cat: "paper", text: "Best Paper Award, 4th IEEE ICASI 2018" },
    { year: 2018, cat: "student", text: "Winner, HOLTEK MCU Creative Design Competition" },
    { year: 2015, cat: "paper", text: "Best Paper Award, IEEE ICASI 2015" },
    { year: 2014, cat: "student", text: "2nd Place, 4C Technology Application Competition; 3rd Place, Display Technology Application Competition" },
    { year: 2011, cat: "student", text: "3rd Place (Taiwan Final), Microsoft Imagine Cup — Software Design" },
    { year: 2011, cat: "student", text: "2nd Prize, Fujitsu Semiconductor MCU Design Contest" },
    { year: 2007, cat: "student", text: "Bronze Award, Macronix Golden Silicon Awards" }
  ],

  /* ---------- Professional service ---------- */
  editorial: [
    "Editor-in-Chief, Discover Computing (2026– )",
    "Editor-in-Chief, Journal of Artificial Intelligence and Science Communication (2026– )",
    "Guest Editor, Journal of Marine Science and Technology (2024)",
    "Guest Editor, Computer Science and Information Systems — Deep Learning in Intelligent IoT and 5G (2024)",
    "Guest Editor, Applied Sciences — Special Issue “Deep Learning in Image Recognition” (2023)",
    "Guest Editor, Electronics — Special Issue “Design, Development and Testing of Wearable Devices” (2023)",
    "Guest Editor, Symmetry — Special Issue “Deep Learning and Symmetry” (2021–2022)"
  ],

  conferenceRoles: [
    "General Chair, 30th Conference on Technologies and Applications of Artificial Intelligence (TAAI 2025)",
    "Program Chair, Program Co-Chair & Doctoral Colloquium Chair, IEEE AVSS 2025",
    "Area Chair, IEEE International Conference on Multimedia and Expo (ICME 2025, 2026)",
    "Area Chair, IEEE AVSS 2026",
    "Keynote Speaker, 5th International Conference on Engineering Management and Information Science (EMIS 2026)",
    "Publication Chair, MIIPSC 2027 · AIMVC 2026 · EKI 2024",
    "Program Co-Chair, CVGIP 2025 · IWAIT 2025",
    "Special Session Chair, IEEE ICCE-TW (2023, 2026), IWAIT 2026, ITAOI (2021, 2023–2026), NCWIA (2024, 2025), ICKII (2024, 2025), CVGIP (2019–2024), ISPACS 2021, IC3 (2019, 2021), FC 2020",
    "Session Chair, IEEE GCCE (2024, 2025), ICASI 2025, ICCT-Pacific 2025, ICCCI (2024, 2025)",
    "Poster Session Chair, APSIPA ASC 2023",
    "Co-Chair, Computer Graphics Workshop (CGW 2021)",
    "Finance Chair, CVGIP 2019; Local Arrangement Chair, IEDMS 2018",
    "Technical Program Committee: ICPRAM (2016–2018, 2020, 2025), ICNCC 2025, ICCE-TW 2025, ICCCI, ICMSP 2024, TANET 2019, TWELF 2020"
  ],

  reviewing: {
    journals: [
      "IEEE Transactions on Multimedia", "IEEE Transactions on Image Processing",
      "IEEE Transactions on Systems, Man, and Cybernetics: Systems", "IEEE Signal Processing Letters",
      "IEEE Journal of Biomedical and Health Informatics", "IEEE MultiMedia",
      "Multimedia Tools and Applications", "Journal of Biomedical Informatics",
      "International Journal of Fuzzy Systems", "Journal of Information Science and Engineering",
      "Journal of Imaging Science and Technology", "Sustainable Energy, Grids and Networks",
      "Journal of Intelligent Systems", "Informatics in Medicine Unlocked",
      "Journal of the Chinese Institute of Engineers", "Journal of Applied Science and Engineering"
    ],
    panels: [
      "Review Panel, Intelligent Computing Program, MOST/NSTC (2020–2022)",
      "Evaluation Committee, NSTC Outstanding Project Achievements in Computer Science (2023)",
      "Reviewer, MOEA Small Business Innovation Research (SBIR) Program (2025, 2026)",
      "Reviewer, MOEA Value Creation Program and Academia–Industry Medical Device Program (2024)",
      "Examination Committee, Taiwan Academy of Banking and Finance (2024–2026)"
    ]
  },

  memberships: [
    "Senior Member, IEEE (2024– ; Member 2017–2024) — Consumer Technology, Signal Processing, and Systems, Man & Cybernetics Societies",
    "Supervisor, IET Taiwan (2024– )",
    "Board Director, Taiwan Society of Advanced Technology Development (2024– )",
    "Member, Consumer Electronics Society of Taiwan (2018– )",
    "Member, Chinese Image Processing and Pattern Recognition Society (IPPR) (2018– )",
    "Member, Taiwanese Association for Artificial Intelligence (2018– )",
    "Member, Taiwan Association of Computer Graphics and Interaction Technology (2018– )",
    "Member, Taiwan Human-Computer Interaction Society (2020– )"
  ],

  /* ---------- Teaching ---------- */
  teaching: {
    note: "Student course evaluations consistently between 4.1 and 4.8 out of 5 (NTOU 2017–2021; NTUST 2022– ).",
    courses: [
      "Machine Learning", "Deep Learning", "Artificial Intelligence", "Linear Algebra",
      "Probability", "Data Structures", "Operating Systems", "Programming Languages",
      "Python Programming", "R Programming", "Network Programming",
      "Architecture of Programming Languages", "Electronic Commerce", "Management", "Microcinema"
    ]
  },

  /* ---------- Invited talks (selected) ---------- */
  talks: [
    { year: 2026, text: "Keynote, EMIS 2026 — 5th International Conference on Engineering Management and Information Science" },
    { year: 2023, text: "Smart Aquaculture Systems — National Yang Ming Chiao Tung University (Tainan Campus)" },
    { year: 2022, text: "Deep Learning for Wake-Effect Analysis in Offshore Wind Farms — China Steel Corporation" },
    { year: 2022, text: "Mapping an AI Blueprint: Integrating STEAM and Marine Education — National Taipei University of Technology" },
    { year: 2022, text: "Smart Cage Aquaculture Applications — Taiwan–Palau International Exchange, NTOU" },
    { year: 2020, text: "The Environment Information Captioning System for the Blind — International Symposium on Intelligent Robotics and Systems, Nagoya, Japan" },
    { year: 2020, text: "Underwater ROV Broken Fishing Net Detection Based on YOLO — Frontier Computing, Singapore" },
    { year: 2020, text: "Integrating AI into Marine Education — Taiwan E-Learning Forum, National Chiao Tung University" },
    { year: 2019, text: "The Stereo Blind-Guide Robot Based on Deep Learning — Massachusetts Institute of Technology (MIT)" },
    { year: 2019, text: "Deep Learning and Its Applications — CVGIP 2019" },
    { year: 2019, text: "International Trends in AI Ethics — International Academic Conference on Artificial Intelligence and Law" },
    { year: 2019, text: "Deep Learning for Underwater ROVs — TAAI 2019, National University of Kaohsiung" },
    { year: 2018, text: "Robotic-Assisted Learning Based on the ARCS Motivation Model — ICASI 2018, Chiba, Japan" },
    { year: 2016, text: "Human-Computer Interaction and Its Applications — National Taiwan Normal University" },
    { year: 2015, text: "Robots and Human-Computer Interaction — National Taichung University of Education" }
  ],

  /* ---------- System demos (YouTube video IDs) ---------- */
  demos: [
    { id: "QCoxvTgt-Yg", title: "The mastermind behind Foxconn's NT$5 million acquisition of AI fish farming technology has been revealed." },
    { id: "9Dwp6oF8DuA", title: "Self-Attention Deep Neural Network for Vehicle Tracking" },
    { id: "qd5Ep31tGzA", title: "OpenPose-Based Sexual Maturity Analysis of Cobia Broodstock" },
    { id: "Bo0YbVjyI50", title: "Single-Stage Instance Segmentation for Fish Information Analysis" },
    { id: "X5Rh9F9lJ7A", title: "Underwater Stereo Vision via Depth Images and Image Interpolation" },
    { id: "8FbIlhOGnJQ", title: "Crowd Density Estimation Based on Deep Learning" },
    { id: "qdEIP7UVjkI", title: "SOM + Graph Convolution for Pineapple Ripeness Analysis" },
    { id: "5m-ZAHkza8E", title: "Body Parameter Analysis of Spotted Knifejaw via Deep Learning" },
    { id: "tD4_5eUMnRo", title: "Gametogenesis-Inspired Optimization Algorithm" },
    { id: "lvIKfk4EPKM", title: "Single-Stage Object Segmentation Algorithm" },
    { id: "QM6L5t7WDKI", title: "Explainable YOLOv4 Based on FHRCNN" },
    { id: "mNGOtRZAWu0", title: "Adaptive Underwater Image Enhancement for ROV Depth Estimation & Debris Detection" },
    { id: "gv8PsZ5zX1k", title: "AI Wearable Guidance Aid for the Blind" },
    { id: "II3nguVosuA", title: "Multi-Layer SOM for Lung Tumor Lesion Detection" },
    { id: "M5KF8S3XnZk", title: "Indoor Wheeled Guide Robot for the Visually Impaired" },
    { id: "FD6Ieaf1FrA", title: "Cerebral Small Vessel Disease Lesion Detection" },
    { id: "mjcv2r2dUqc", title: "Deep-Learning-Based Humanoid Robotic Arm Control" }
  ],

  advising: "Has supervised 25+ master's students and about 30 undergraduate research students; advisees have received more than 60 national and international paper and competition awards."
};
