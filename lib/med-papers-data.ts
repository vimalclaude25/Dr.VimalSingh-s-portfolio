export interface PaperSection {
  title: string
  subtitle?: string
  marks: string
  instructions?: string
  questions: any[]
}

export interface ExamPaperDetail {
  id: string
  courseCode: string
  title: string
  university: string
  department: string
  examName: string
  semester: string
  session: string
  maxTime: string
  maxMarks: number
  note: string
  sections: PaperSection[]
}

export const med104PaperData: ExamPaperDetail = {
  id: 'MED104-2026',
  courseCode: 'MED104',
  title: 'Research Methods in Education (General Perspectives)',
  university: 'M.Ed. I Semester Examination',
  department: 'DEPARTMENT OF EDUCATION/EDUCATION TRAINING',
  examName: 'MID–SEMESTER EXAMINATION',
  semester: 'M.Ed. I Semester',
  session: '2026 – 27 (Odd Semester)',
  maxTime: '1 Hour 30 Minutes',
  maxMarks: 30,
  note: 'All Questions are Compulsory / सभी प्रश्न अनिवार्य हैं',
  sections: [
    {
      title: 'Section – A',
      marks: '9 × 1 = 9 Marks',
      instructions: 'Attempt all Questions / सभी प्रश्नों के उत्तर दीजिये - (9×1 = 9)',
      questions: [
        {
          id: '1a',
          qNum: '1.a',
          textEn: 'Read the following statements carefully and identify the set of statements that is CORRECT.',
          textHi: 'निम्नलिखित कथनों को ध्यानपूर्वक पढ़िए और सही कथनों के समूह की पहचान कीजिए।',
          statements: [
            { num: 1, textEn: 'Philosophy provides the conceptual coordinates for understanding reality, knowledge, values, reasoning and human existence.', textHi: 'दर्शन वास्तविकता, ज्ञान, मूल्यों, तर्क एवं मानव अस्तित्व को समझने के लिए वैचारिक आधार प्रदान करता है।' },
            { num: 2, textEn: 'Metaphysics primarily examines how researchers can determine whether their findings are statistically significant.', textHi: 'तत्वमीमांसा मुख्यतः यह निर्धारित करती है कि शोधकर्ता अपने निष्कर्षों की सांख्यिकीय सार्थकता कैसे निर्धारित कर सकता है।' },
            { num: 3, textEn: 'Epistemology deals with questions concerning how we know what we know and what constitutes valid research.', textHi: 'ज्ञानमीमांसा इस प्रश्न से संबंधित है कि हम जो जानते हैं उसे कैसे जानते हैं तथा वैध शोध किसे माना जाए।' },
            { num: 4, textEn: 'Axiology is concerned with values, while ethics guides moral conduct in research.', textHi: 'मूल्यमीमांसा मूल्यों से संबंधित है, जबकि नीतिशास्त्र शोध में नैतिक आचरण का मार्गदर्शन करता है।' },
            { num: 5, textEn: 'Positivism assumes that reality is socially constructed and its research goal is to understand deeper meanings.', textHi: 'प्रत्यक्षवाद मानता है कि वास्तविकता सामाजिक रूप से निर्मित होती है और उसका शोध-लक्ष्य गहरे अर्थों को समझना है।' },
            { num: 6, textEn: 'Interpretivism views reality as socially constructed and seeks to understand deeper meaning.', textHi: 'व्याख्यावाद वास्तविकता को सामाजिक रूप से निर्मित मानता है और गहरे अर्थों को समझने का प्रयास करता है।' },
            { num: 7, textEn: 'Pragmatism is concerned with what practically works and with solving real-world problems.', textHi: 'व्यावहारिकतावद उस बात पर केंद्रित है जो व्यावहारिक रूप से उपयोगी हो तथा वास्तविक जीवन की समस्याओं के समाधान में सहायक हो।' },
            { num: 8, textEn: 'Critical Theory accepts existing power structures as neutral and focuses primarily on discovering universal laws.', textHi: 'आलोचनात्मक सिद्धांत विद्यमान सत्ता-संरचनाओं को तटस्थ मानता है और मुख्यतः सार्वभौमिक नियमों की खोज पर ध्यान देता है।' },
            { num: 9, textEn: 'Logical alignment among Reality, Epistemology/Paradigm and Methodology/Process is important for research.', textHi: 'शोध में वास्तविकता, ज्ञानमीमांसा/प्रतिमान तथा कार्यप्रणाली/प्रक्रिया के बीच तार्किक सामंजस्य महत्वपूर्ण है।' },
            { num: 10, textEn: 'The research process moves from Problem → Questions → Design → Data Collection → Analysis → Interpretation → Knowledge Creation.', textHi: 'शोध प्रक्रिया समस्या → प्रश्न → रूपरेखा → आंकड़ा संग्रह → विश्लेषण → निर्वचन → ज्ञान निर्माण के क्रम में आगे बढ़ती है।' }
          ],
          options: [
            { code: 'A', text: '1, 2, 3, 4, 7, 9' },
            { code: 'B', text: '1, 3, 4, 6, 7, 9, 10', correct: true },
            { code: 'C', text: '2, 3, 5, 6, 8, 10' },
            { code: 'D', text: '1, 4, 5, 7, 8, 9, 10' }
          ]
        },
        {
          id: '1b',
          qNum: '1.b',
          textEn: 'Read the following statements carefully and identify the set of statements that is CORRECT.',
          textHi: 'निम्नलिखित कथनों को ध्यानपूर्वक पढ़िए और सही कथनों के समूह की पहचान कीजिए।',
          statements: [
            { num: 1, textEn: 'Practitioner research can help teachers move from anecdotal assumptions toward evidence-based practice.', textHi: 'शिक्षक-आधारित शोध, शिक्षकों को व्यक्तिगत धारणाओं से साक्ष्य-आधारित अभ्यास की ओर बढ़ने में सहायता कर सकता है।' },
            { num: 2, textEn: 'Inquiry and curiosity involve identifying a knowledge gap that can be investigated systematically.', textHi: 'जिज्ञासा एवं अन्वेषण में ऐसे ज्ञान-अंतर की पहचान करना शामिल है जिसकी व्यवस्थित रूप से जाँच की जा सकती है।' },
            { num: 3, textEn: 'Weekly low-stakes quizzes are compared with regular homework to examine their effect on final examination performance.', textHi: 'अंतिम परीक्षा के प्रदर्शन पर प्रभाव जानने के लिए साप्ताहिक कम-जोखिम वाली क्विज़ की तुलना नियमित गृहकार्य से की जाती है।' },
            { num: 4, textEn: 'A quasi-experimental design requires that every participant must be randomly assigned to the intervention and control groups.', textHi: 'अर्ध-प्रायोगिक अभिकल्प में प्रत्येक प्रतिभागी को अनिवार्य रूप से हस्तक्षेप एवं नियंत्रण समूहों में यादृच्छिक रूप से आवंटित किया जाना आवश्यक है।' },
            { num: 5, textEn: 'Pre-test and final-exam measurements can provide baseline and outcome information for examining change.', textHi: 'पूर्व-परीक्षण एवं अंतिम परीक्षा के मापन से परिवर्तन का अध्ययन करने के लिए आधाररेखा एवं परिणाम संबंधी जानकारी प्राप्त की जा सकती है।' },
            { num: 6, textEn: 'Statistical significance alone necessarily proves that an intervention is the only cause of the observed improvement.', textHi: 'सांख्यिकीय सार्थकता अपने-आप यह सिद्ध कर देती है कि देखे गए सुधार का एकमात्र कारण हस्तक्षेप ही है।' },
            { num: 7, textEn: 'A confounding variable may provide an alternative explanation for an observed relationship between an intervention and an outcome.', textHi: 'कोई confounding variable हस्तक्षेप एवं परिणाम के बीच देखे गए संबंध की वैकल्पिक व्याख्या प्रस्तुत कर सकता है।' },
            { num: 8, textEn: 'If increased study hours may influence final examination scores, measuring study time and controlling for it can strengthen the analysis.', textHi: 'यदि अध्ययन के बढ़े हुए घंटे अंतिम परीक्षा के अंकों को प्रभावित कर सकते हैं, तो अध्ययन-समय का मापन एवं उसका नियंत्रण विश्लेषण को अधिक सुदृढ़ कर सकता है।' },
            { num: 9, textEn: 'Research concludes permanently once statistically significant results have been obtained, so further questions are unnecessary.', textHi: 'सांख्यिकीय रूप से सार्थक परिणाम प्राप्त होते ही शोध स्थायी रूप से समाप्त हो जाता है और आगे के प्रश्न आवश्यक नहीं होते।' },
            { num: 10, textEn: 'Replication is strengthened when research methods are simple, clearly documented and repeatable by other practitioners.', textHi: 'जब शोध की विधियाँ सरल, स्पष्ट रूप से आलेखित तथा अन्य शोधकर्ताओं/व्यवसायियों द्वारा दोहराई जा सकें, तब पुनरावृत्ति अधिक सुदृढ़ होती है।' }
          ],
          options: [
            { code: 'A', text: '1, 2, 3, 5, 7, 8, 10', correct: true },
            { code: 'B', text: '1, 3, 4, 6, 7, 9, 10' },
            { code: 'C', text: '2, 3, 5, 6, 8, 10' },
            { code: 'D', text: '1, 4, 5, 7, 8, 9, 10' }
          ]
        },
        {
          id: '1c',
          qNum: '1.c',
          textEn: 'Read the following research situations carefully and identify the set of situations that correctly represents epistemological concerns.',
          textHi: 'निम्नलिखित शोध-परिस्थितियों को ध्यानपूर्वक पढ़िए और उस विकल्प का चयन कीजिए जिसमें ज्ञानमीमांसा से संबंधित सभी सही स्थितियाँ दी गई हैं।',
          statements: [
            { num: 1, textEn: 'A researcher asks students whether their knowledge of a concept comes mainly from classroom observation and personal experience.', textHi: 'एक शोधकर्ता यह जानना चाहता है कि किसी अवधारणा के बारे में विद्यार्थियों का ज्ञान मुख्यतः कक्षा-अवलोकन और व्यक्तिगत अनुभव से आता है या नहीं।' },
            { num: 2, textEn: 'A researcher examines whether logical reasoning can provide a valid basis for accepting a conclusion about students’ learning.', textHi: 'एक शोधकर्ता यह जाँचता है कि तार्किक तर्क विद्यार्थियों के अधिगम के बारे में किसी निष्कर्ष को स्वीकार करने का वैध आधार प्रदान कर सकता है या नहीं।' },
            { num: 3, textEn: 'A researcher investigates how students construct their understanding of a difficult concept through their previous experiences and interactions.', textHi: 'एक शोधकर्ता यह अध्ययन करता है कि विद्यार्थी अपने पूर्व अनुभवों और अंतःक्रियाओं के माध्यम से किसी कठिन अवधारणा की समझ का निर्माण कैसे करते हैं।' },
            { num: 4, textEn: 'A researcher studies how social and cultural conditions influence what is accepted as knowledge in a classroom.', textHi: 'एक शोधकर्ता यह अध्ययन करता है कि सामाजिक एवं सांस्कृतिक परिस्थितियाँ कक्षा में किसे ज्ञान के रूप में स्वीकार किया जाता है, इसे कैसे प्रभावित करती हैं।' },
            { num: 5, textEn: 'A researcher asks whether a belief held by students should automatically be treated as true simply because they strongly believe it.', textHi: 'एक शोधकर्ता यह पूछता है कि क्या विद्यार्थियों द्वारा दृढ़ता से मानी जाने वाली धारणा को केवल इसी कारण स्वतः सत्य मान लिया जाना चाहिए।' },
            { num: 6, textEn: 'A researcher explores whether observation, inference, intuition and logic can be considered different ways through which knowledge is acquired.', textHi: 'एक शोधकर्ता यह अध्ययन करता है कि क्या अवलोकन, अनुमान, अंतर्ज्ञान और तर्क ज्ञान प्राप्त करने के विभिन्न तरीकों के रूप में देखे जा सकते हैं।' },
            { num: 7, textEn: 'A researcher examines the relationship between the knower and the phenomenon being studied.', textHi: 'एक शोधकर्ता ज्ञान प्राप्त करने वाले व्यक्ति और अध्ययन की जा रही घटना के बीच संबंध का परीक्षण करता है।' },
            { num: 8, textEn: 'A researcher decides that the only purpose of epistemology is to calculate the statistical significance of research findings.', textHi: 'एक शोधकर्ता यह मानता है कि ज्ञानमीमांसा का एकमात्र उद्देश्य शोध निष्कर्षों की सांख्यिकीय सार्थकता की गणना करना है।' },
            { num: 9, textEn: 'A researcher questions what can be known about an educational phenomenon and whether some aspects may remain beyond human knowledge.', textHi: 'एक शोधकर्ता यह प्रश्न करता है कि किसी शैक्षिक घटना के बारे में क्या जाना जा सकता है और क्या उसके कुछ पक्ष मानव ज्ञान की सीमा से परे हो सकते हैं।' },
            { num: 10, textEn: 'A researcher examines how to distinguish justified or valid knowledge from false or unsupported beliefs.', textHi: 'एक शोधकर्ता यह जाँचता है कि उचित अथवा वैध ज्ञान को मिथ्या या असमर्थित धारणाओं से किस प्रकार अलग किया जा सकता है।' }
          ],
          options: [
            { code: 'A', text: '1, 2, 3, 5, 7, 8, 10' },
            { code: 'B', text: '1, 3, 4, 5, 6, 8, 9' },
            { code: 'C', text: '2, 3, 4, 6, 7, 9, 10' },
            { code: 'D', text: '1, 2, 3, 5, 6, 7, 8', correct: true }
          ]
        },
        {
          id: '1d',
          qNum: '1.d',
          textEn: 'Read the story carefully and identify the correct combination of statements. (Ananya’s Case Study on Knowledge Acquisition)',
          textHi: 'कहानी को ध्यानपूर्वक पढ़िए और सही कथनों के समूह की पहचान कीजिए। (अनन्या का ज्ञान प्राप्ति पर अध्ययन)',
          statements: [
            { num: 1, textEn: 'Her teacher explains a difficult concept, and Ananya accepts the explanation because she considers the teacher knowledgeable and trustworthy.', textHi: 'उसकी शिक्षिका एक कठिन अवधारणा समझाती हैं और अनन्या उनकी बात को इसलिए स्वीकार करती है क्योंकि वह उन्हें ज्ञानी एवं विश्वसनीय मानती है।' },
            { num: 2, textEn: 'During a festival, Ananya follows a family ritual that has been practiced across generations.', textHi: 'एक त्योहार के दौरान अनन्या उस पारिवारिक परंपरा का पालन करती है जो कई पीढ़ियों से चली आ रही है।' },
            { num: 3, textEn: 'Ananya learns to ride a bicycle through repeated attempts, mistakes and practice.', textHi: 'अनन्या बार-बार प्रयास, गलतियों और अभ्यास के माध्यम से साइकिल चलाना सीखती है।' },
            { num: 4, textEn: 'After observing the sunrise repeatedly in the east, she forms a general conclusion about where the sun rises.', textHi: 'पूर्व दिशा में सूर्योदय को बार-बार देखकर वह सूर्य के उदय की दिशा के बारे में एक सामान्य निष्कर्ष बनाती है।' },
            { num: 5, textEn: 'She reasons: "All humans need food. I am a human. Therefore, I need food."', textHi: 'वह तर्क करती है: "सभी मनुष्यों को भोजन की आवश्यकता होती है। मैं एक मनुष्य हूँ। अतः मुझे भोजन की आवश्यकता है।"' },
            { num: 6, textEn: 'While studying plants, Ananya notices that they grow toward the window, proposes a hypothesis, changes their position and observes the results systematically.', textHi: 'पौधों का अध्ययन करते समय अनन्या देखती है कि वे खिड़की की ओर बढ़ते हैं, एक परिकल्पना बनाती है, उनकी स्थिति बदलती है और परिणामों का व्यवस्थित अवलोकन करती है।' },
            { num: 7, textEn: 'Ananya decides that knowledge gained from personal experience is always true and never needs further justification.', textHi: 'अनन्या यह निष्कर्ष निकालती है कि व्यक्तिगत अनुभव से प्राप्त ज्ञान हमेशा सत्य होता है और उसे किसी अतिरिक्त औचित्य की आवश्यकता नहीं होती।' },
            { num: 8, textEn: 'She realizes that knowledge is not merely information but understanding with meaning.', textHi: 'उसे यह समझ आता है कि ज्ञान केवल सूचना नहीं बल्कि अर्थपूर्ण समझ है।' },
            { num: 9, textEn: 'She recognizes that knowledge should be reliable, justified, systematic and capable of being verified.', textHi: 'वह समझती है कि ज्ञान विश्वसनीय, औचित्यपूर्ण, व्यवस्थित और सत्यापन योग्य होना चाहिए।' },
            { num: 10, textEn: 'She concludes that scientific method involves systematic observation, hypothesis, experimentation, analysis and conclusion.', textHi: 'वह निष्कर्ष निकालती है कि वैज्ञानिक विधि में व्यवस्थित अवलोकन, परिकल्पना, प्रयोग, विश्लेषण और निष्कर्ष शामिल होते हैं।' }
          ],
          options: [
            { code: 'A', text: '2, 3, 4, 5, 7, 8, 9, 10' },
            { code: 'B', text: '1, 2, 3, 4, 6, 7, 8, 10' },
            { code: 'C', text: '1, 3, 5, 6, 7, 8, 9' },
            { code: 'D', text: '1, 2, 3, 4, 5, 6, 8, 9, 10', correct: true }
          ]
        },
        {
          id: '1e',
          qNum: '1.e',
          textEn: 'Three M.Ed. students—Kunal, Manav and Vivek—were discussing the meaning of philosophy while preparing for their Research in Education class.',
          textHi: 'तीन M.Ed. विद्यार्थी—कुणाल, मानव और विवेक—Research in Education की कक्षा की तैयारी करते समय दर्शन के अर्थ पर चर्चा कर रहे थे।',
          statements: [
            { num: 1, textEn: 'Kunal said, "I have read many books and collected a large amount of information. Therefore, I have knowledge."', textHi: 'कुणाल ने कहा, "मैंने बहुत-सी पुस्तकें पढ़ी हैं और बहुत सारी सूचनाएं एकत्र की हैं। इसलिए मेरे पास ज्ञान है।"' },
            { num: 2, textEn: 'Manav said, "I can solve difficult problems quickly by applying logic, so I am intelligent."', textHi: 'मानव ने कहा, "मैं तर्क का प्रयोग करके कठिन समस्याओं को शीघ्र हल कर सकता हूँ, इसलिए मैं बुद्धिमान हूँ।"' },
            { num: 3, textEn: 'Vivek replied, "Knowledge gives us facts, intelligence helps us use them, but wisdom helps us decide what is right and best."', textHi: 'विवेक ने उत्तर दिया, "ज्ञान हमें तथ्य देता है, बुद्धिमत्ता उनका उपयोग करने में सहायता करती है, जबकि प्रज्ञा यह तय करने में सहायता करती है कि क्या सही और सर्वोत्तम है।"' },
            { num: 4, textEn: 'The teacher explained that philosophy comes from the Greek words Philos (love) and Sophia (wisdom), meaning "love for wisdom."', textHi: 'शिक्षक ने समझाया कि Philosophy शब्द ग्रीक शब्दों Philos (प्रेम) और Sophia (प्रज्ञा/बुद्धि) से बना है, जिसका अर्थ "प्रज्ञा के प्रति प्रेम" है।' },
            { num: 5, textEn: 'She further explained that philosophy is not merely collecting facts or becoming intelligent; it involves curiosity, reflection, questioning and the search for truth, goodness and a meaningful life.', textHi: 'उन्होंने आगे समझाया कि दर्शन केवल तथ्यों को एकत्र करना या बुद्धिमान बनना नहीं है; इसमें जिज्ञासा, चिंतन, प्रश्न करना तथा सत्य, अच्छाई और अर्थपूर्ण जीवन की खोज शामिल है।' },
            { num: 6, textEn: 'Kunal argued that once a person possesses sufficient information, there is no need for reflection or questioning.', textHi: 'कुणाल ने तर्क दिया कि जब किसी व्यक्ति के पास पर्याप्त सूचना हो जाती है, तो चिंतन या प्रश्न करने की कोई आवश्यकता नहीं रहती।' },
            { num: 7, textEn: 'Manav observed that intelligence and wisdom are exactly the same because both involve the ability to solve problems.', textHi: 'मानव ने कहा कि बुद्धिमत्ता और प्रज्ञा बिल्कुल समान हैं क्योंकि दोनों में समस्याओं को हल करने की क्षमता शामिल होती है।' },
            { num: 8, textEn: 'Vivek used his knowledge and intelligence to make responsible decisions and help others, showing how wisdom can transform knowledge into meaningful action.', textHi: 'विवेक ने अपने ज्ञान और बुद्धिमत्ता का उपयोग जिम्मेदार निर्णय लेने तथा दूसरों की सहायता करने में किया, जिससे स्पष्ट हुआ कि प्रज्ञा ज्ञान को अर्थपूर्ण कार्य में बदल सकती है।' },
            { num: 9, textEn: 'The teacher concluded that philosophy encourages us to use knowledge and intelligence for a meaningful and better life.', textHi: 'शिक्षक ने निष्कर्ष दिया कि दर्शन हमें ज्ञान और बुद्धिमत्ता का उपयोग अर्थपूर्ण एवं बेहतर जीवन के लिए करने हेतु प्रेरित करता है।' },
            { num: 10, textEn: 'She added that philosophical thinking can be expressed as: Philosophy → Search for Wisdom → Better Life → Better World.', textHi: 'उन्होंने यह भी बताया कि दार्शनिक चिंतन को इस प्रकार समझा जा सकता है: दर्शन → प्रज्ञा की खोज → बेहतर जीवन → बेहतर संसार।' }
          ],
          options: [
            { code: 'A', text: '2, 3, 4, 5, 6, 7, 9' },
            { code: 'B', text: '1, 2, 4, 6, 7, 8, 10' },
            { code: 'C', text: '1, 2, 3, 4, 5, 8, 9, 10', correct: true },
            { code: 'D', text: '1, 3, 5, 6, 7, 8, 9, 10' }
          ]
        },
        {
          id: '1f',
          qNum: '1.f',
          textEn: 'Aarav, a postgraduate student, was preparing a seminar on how knowledge, education and research contribute to individual and social development.',
          textHi: 'आरव एक स्नातकोत्तर विद्यार्थी है। वह ज्ञान, शिक्षा एवं शोध की भूमिका पर एक सेमिनार की तैयारी कर रहा है। उसके शिक्षक ने उसे एक परिस्थिति का विश्लेषण करने को कहा।',
          statements: [
            { num: 1, textEn: 'Knowledge represents awareness and understanding of reality and may develop through experience, thinking, reflection and discovery.', textHi: 'ज्ञान वास्तविकता के प्रति जागरूकता एवं समझ को दर्शाता है तथा अनुभव, चिंतन, मनन एवं खोज के माध्यम से विकसित हो सकता है।' },
            { num: 2, textEn: 'Education mainly transmits existing knowledge and has no significant role in developing skills, attitudes, values or critical thinking.', textHi: 'शिक्षा मुख्यतः विद्यमान ज्ञान को संचारित करती है और कौशल, अभिवृत्तियों, मूल्यों अथवा आलोचनात्मक चिंतन के विकास में इसकी कोई महत्वपूर्ण भूमिका नहीं है।' },
            { num: 3, textEn: 'Research explores unknowns, generates new knowledge and can validate or refine existing knowledge.', textHi: 'शोध अज्ञात का अन्वेषण करता है, नवीन ज्ञान का निर्माण करता है तथा विद्यमान ज्ञान का सत्यापन या परिष्करण कर सकता है।' },
            { num: 4, textEn: 'Education can inspire questions and prepare learners’ minds for research.', textHi: 'शिक्षा प्रश्नों को उत्पन्न करने तथा शिक्षार्थियों के मस्तिष्क को शोध के लिए तैयार करने में सहायक हो सकती है।' },
            { num: 5, textEn: 'Research and education are completely independent processes because education only uses old knowledge whereas research only produces unrelated new knowledge.', textHi: 'शिक्षा एवं शोध पूर्णतः स्वतंत्र प्रक्रियाएं हैं क्योंकि शिक्षा केवल पुराने ज्ञान का उपयोग करती है, जबकि शोध केवल असंबद्ध नवीन ज्ञान उत्पन्न करता है।' },
            { num: 6, textEn: 'Knowledge can be organized and transmitted through education, while research can expand and refine that knowledge.', textHi: 'ज्ञान को शिक्षा के माध्यम से व्यवस्थित एवं संप्रेषित किया जा सकता है, जबकि शोध उस ज्ञान का विस्तार एवं परिष्करण कर सकता है।' },
            { num: 7, textEn: 'The cycle may be understood as Knowledge → Education → Research → New Knowledge → Benefits to Society.', textHi: 'इस चक्र को ज्ञान → शिक्षा → शोध → नवीन ज्ञान → समाज को लाभ के रूप में समझा जा सकता है।' },
            { num: 8, textEn: 'Research is useful only for producing academic publications and has no role in innovation, problem-solving or societal development.', textHi: 'शोध केवल अकादमिक प्रकाशनों के निर्माण के लिए उपयोगी है तथा नवाचार, समस्या-समाधान या सामाजिक विकास में इसकी कोई भूमिका नहीं है।' },
            { num: 9, textEn: 'Knowledge, education and research together can contribute to personal growth, social progress, economic development and a sustainable future.', textHi: 'ज्ञान, शिक्षा एवं शोध मिलकर व्यक्तिगत विकास, सामाजिक प्रगति, आर्थिक विकास तथा सतत भविष्य में योगदान कर सकते हैं।' },
            { num: 10, textEn: 'Knowledge is the foundation, education cultivates and imparts knowledge, and research investigates and expands knowledge.', textHi: 'ज्ञान आधार प्रदान करता है, शिक्षा ज्ञान को विकसित एवं संप्रेषित करती है, तथा शोध ज्ञान की जाँच एवं उसका विस्तार करता है।' }
          ],
          options: [
            { code: 'A', text: '1, 2, 3, 4, 5, 7, 9' },
            { code: 'B', text: '1, 3, 4, 6, 7, 9, 10', correct: true },
            { code: 'C', text: '2, 3, 5, 6, 8, 9, 10' },
            { code: 'D', text: '1, 3, 5, 6, 7, 8, 10' }
          ]
        },
        {
          id: '1g',
          qNum: '1.g',
          textEn: 'Match Column I with the most appropriate description in Column II and select the correct code.',
          textHi: 'स्तम्भ-I का स्तम्भ-II से उचित मिलान कीजिए तथा सही कूट का चयन कीजिए।',
          matchingTable: {
            col1Title: 'Column I: Concept / अवधारणा',
            col2Title: 'Column II: Description / विवरण',
            rows: [
              { col1: 'A. Replication / पुनरावृत्ति', col2: '1. A research procedure should be capable of being repeated by others. / शोध प्रक्रिया को अन्य शोधकर्ताओं द्वारा दोहराया जा सकना चाहिए।' },
              { col1: 'B. Falsifiability / खंडनीयता', col2: '2. Observations and descriptions should be exact and free from unnecessary ambiguity. / अवलोकन एवं विवरण सटीक तथा अनावश्यक अस्पष्टता से मुक्त होने चाहिए।' },
              { col1: 'C. Precision / परिशुद्धता', col2: '3. A scientific claim should be open to being tested and potentially shown to be false. / वैज्ञानिक दावे का परीक्षण किया जा सके तथा आवश्यकता पड़ने पर उसे गलत सिद्ध किया जा सके।' },
              { col1: 'D. Parsimony / मितव्ययिता', col2: '4. Prefer the simplest adequate explanation when competing explanations are available. / जब अनेक व्याख्याएँ उपलब्ध हों, तो पर्याप्त एवं सरल व्याख्या को प्राथमिकता देना।' },
              { col1: 'E. Generalization / सामान्यीकरण', col2: '5. Findings obtained under appropriate conditions may be extended beyond the specific study situation. / उपयुक्त परिस्थितियों में प्राप्त निष्कर्षों को विशिष्ट अध्ययन-परिस्थिति से आगे विस्तारित किया जा सकता है।' }
            ]
          },
          options: [
            { code: 'A', text: 'A–1, B–3, C–2, D–4, E–5', correct: true },
            { code: 'B', text: 'A–3, B–1, C–4, D–2, E–5' },
            { code: 'C', text: 'A–1, B–4, C–2, D–5, E–3' },
            { code: 'D', text: 'A–5, B–3, C–1, D–4, E–2' }
          ]
        },
        {
          id: '1h',
          qNum: '1.h',
          textEn: 'Assertion (A): The research process is generally a slow, steady and long process that requires specialization and specific knowledge.\nReason (R): Research involves moving from an idea and question through exploration and analysis toward discovery and the creation of new knowledge, and it may require considerable time, money and energy.',
          textHi: 'अभिकथन (A): शोध प्रक्रिया सामान्यतः धीमी, निरंतर एवं दीर्घकालिक प्रक्रिया है, जिसमें विशेषज्ञता एवं विशिष्ट ज्ञान की आवश्यकता होती है।\nकारण (R): शोध में विचार एवं प्रश्न से आगे बढ़ते हुए अन्वेषण, विश्लेषण तथा खोज के माध्यम से नवीन ज्ञान के निर्माण तक पहुँचा शामिल है और इसमें पर्याप्त समय, धन एवं ऊर्जा की आवश्यकता हो सकती है।',
          options: [
            { code: 'A', text: 'Both A and R are true, and R is the correct explanation of A.', correct: true },
            { code: 'B', text: 'Both A and R are true, but R is not the correct explanation of A.' },
            { code: 'C', text: 'A is true, but R is false.' },
            { code: 'D', text: 'A is false, but R is true.' }
          ]
        },
        {
          id: '1i',
          qNum: '1.i',
          textEn: 'Read the following statements and identify the correct combination.',
          textHi: 'निम्नलिखित कथनों को पढ़कर सही संयोजन चुनिए।',
          statements: [
            { num: 1, textEn: 'Research generates new ideas.', textHi: 'शोध नए विचार उत्पन्न करता है।' },
            { num: 2, textEn: 'Ideas are important for the growth of knowledge.', textHi: 'ज्ञान के विकास के लिए विचार महत्वपूर्ण हैं।' },
            { num: 3, textEn: 'Research involves synthesis and re-synthesis of knowledge.', textHi: 'शोध में ज्ञान का संश्लेषण एवं पुनःसंश्लेषण शामिल है।' },
            { num: 4, textEn: 'Research critically examines existing knowledge.', textHi: 'शोध विद्यमान ज्ञान का आलोचनात्मक परीक्षण करता है।' },
            { num: 5, textEn: 'Universities can act as knowledge banks.', textHi: 'विश्वविद्यालय ज्ञान के भंडार के रूप में कार्य कर सकते हैं।' },
            { num: 6, textEn: 'Research helps transmit knowledge from one generation to another.', textHi: 'शोध ज्ञान को एक पीढ़ी से दूसरी पीढ़ी तक पहुँचाने में सहायता करता है।' },
            { num: 7, textEn: 'Research investigates existing situations and real-life problems.', textHi: 'शोध विद्यमान परिस्थितियों एवं वास्तविक जीवन की समस्याओं का अन्वेषण करता है।' },
            { num: 8, textEn: 'Scientific research aims at objectivity, reliability, validity and verifiability.', textHi: 'वैज्ञानिक शोध वस्तुनिष्ठता, विश्वसनीयता, वैधता एवं सत्यापनशीलता पर बल देता है।' },
            { num: 9, textEn: 'Research can provide practical and effective solutions to problems.', textHi: 'शोध समस्याओं के व्यावहारिक एवं प्रभावी समाधान प्रदान कर सकता है।' },
            { num: 10, textEn: 'Research is concerned only with storing existing knowledge and does not explore new solutions.', textHi: 'शोध केवल विद्यमान ज्ञान को सुरक्षित रखने तक सीमित है और नए समाधानों का अन्वेषण नहीं करता।' }
          ],
          options: [
            { code: 'A', text: '1, 2, 4, 5, 6, 8, 9, 10' },
            { code: 'B', text: '1, 2, 3, 4, 5, 7, 8, 9', correct: true },
            { code: 'C', text: '2, 3, 5, 6, 7, 8, 10' },
            { code: 'D', text: '1, 3, 4, 6, 7, 9, 10' }
          ]
        }
      ]
    },
    {
      title: 'Section – B',
      marks: '3 × 3 = 9 Marks',
      instructions: 'Attempt any three of the following Questions / किन्ही तीन प्रश्नों के उत्तर दीजिये - (3×3 = 9)',
      questions: [
        {
          id: '2a',
          qNum: '2.a',
          textEn: 'A researcher is interested in three different educational situations:\nA. Understanding how students develop the concept of creativity — without an immediate practical application.\nB. Finding whether a new teaching strategy can improve mathematics achievement in secondary school students.\nC. Solving a specific classroom problem of poor reading comprehension through a teacher’s own intervention.\n→ Identify the type of research represented by A, B and C and frame one appropriate research problem for each.',
          textHi: 'एक शोधकर्ता तीन अलग-अलग शैक्षिक परिस्थितियों का अध्ययन करना चाहता है:\nA. विद्यार्थियों में रचनात्मकता की अवधारणा किस प्रकार विकसित होती है, इसे समझना — बिना किसी तात्कालिक व्यावहारिक उपयोग के।\nB. यह जानना कि नई शिक्षण रणनीति माध्यमिक स्तर के विद्यार्थियों की गणितीय उपलब्धि में सुधार कर सकती है या नहीं।\nC. शिक्षक द्वारा अपने हस्तक्षेप के माध्यम से कक्षा में विद्यार्थियों की कमजोर पठन-बोध समस्या का समाधान करना।\n→ A, B और C में निहित शोध के प्रकार की पहचान कीजिए तथा प्रत्येक के लिए एक उपयुक्त शोध समस्या तैयार कीजिए।'
        },
        {
          id: '2b',
          qNum: '2.b',
          textEn: 'A researcher wants to study "Why do some rural students hesitate to participate in online classes?" He plans to conduct interviews and observe students’ experiences rather than collect numerical scores.\n→ Apply your understanding of research approaches and identify the most appropriate approach. Give two reasons for your choice.',
          textHi: 'एक शोधकर्ता यह अध्ययन करना चाहता है कि "कुछ ग्रामीण विद्यार्थी ऑनलाइन कक्षाओं में भाग लेने से क्यों हिचकिचाते हैं?" इसके लिए वह संख्यात्मक अंकों को एकत्र करने के बजाय विद्यार्थियों के साक्षात्कार लेने और उनके अनुभवों का अवलोकन करने की योजना बनाता है।\n→ शोध उपागमों की अपनी समझ को लागू करते हुए सबसे उपयुक्त उपागम की पहचान कीजिए। अपने चयन के दो कारण दीजिए।'
        },
        {
          id: '2c',
          qNum: '2.c',
          textEn: 'A researcher finds that students taught through a new teaching strategy perform better in a test. However, instead of claiming that the strategy certainly and completely caused the improvement, the researcher considers possible limitations, alternative explanations and the fallibility of measurement before drawing a conclusion.\n→ Which research approach is reflected in this situation? Explain how the researcher’s thinking reflects the key assumptions of this approach.',
          textHi: 'एक शोधकर्ता पाता है कि नई शिक्षण रणनीति से पढ़ाए गए विद्यार्थियों का परीक्षा में प्रदर्शन बेहतर हुआ है। हालांकि, शोधकर्ता यह दावा नहीं करता कि इस सुधार का निश्चित और पूर्ण कारण केवल वही शिक्षण रणनीति है। निष्कर्ष निकालने से पहले वह संभावित सीमाओं, वैकल्पिक व्याख्याओं तथा मापन की अपूर्णता को ध्यान में रखता है।\n→ इस परिस्थिति में कौन-सा शोध उपागम परिलक्षित होता है? स्पष्ट कीजिए कि शोधकर्ता का चिंतन इस उपागम की प्रमुख मान्यताओं को किस प्रकार दर्शाता है।'
        },
        {
          id: '2d',
          qNum: '2.d',
          textEn: 'A researcher studies how children develop the concept of "fairness" during different stages of cognitive development, without intending to develop an immediate classroom intervention.\n→ What type of research is this? Explain the conceptual basis of your answer and state how the findings may contribute to educational knowledge.',
          textHi: 'एक शोधकर्ता यह अध्ययन करता है कि संज्ञानात्मक विकास के विभिन्न चरणों में बच्चों में "निष्पक्षता" की अवधारणा किस प्रकार विकसित होती है, बिना किसी तात्कालिक कक्षा-हस्तक्षेप को विकसित करने के उद्देश्य के।\n→ यह किस प्रकार का शोध है? अपने उत्तर के वैचारिक आधार को स्पष्ट कीजिए तथा बताइए कि इसके निष्कर्ष शैक्षिक ज्ञान में किस प्रकार योगदान दे सकते हैं।'
        }
      ]
    },
    {
      title: 'Section – C',
      marks: '2 × 6 = 12 Marks',
      instructions: 'Attempt any two of the following Questions / किन्ही दो प्रश्नों के उत्तर दीजिये - (2×6 = 12)',
      questions: [
        {
          id: '3a',
          qNum: '3.a',
          textEn: 'Imagine that you are investigating education through three different windows:\n1 – Past: You want to understand how education policies during the British period influenced the development of education in India.\n2 – Present: You want to find out the present status of digital learning among secondary school students.\n3 – Intervention: You want to test whether a new teaching method produces better science achievement than the existing method.\n→ Identify the research design appropriate for each window and formulate one suitable research problem for each.',
          textHi: 'कल्पना कीजिए कि आप तीन विभिन्न खिड़कियों से शिक्षा का अध्ययन कर रहे हैं:\n1 – अतीत: आप यह समझना चाहते हैं कि ब्रिटिश काल की शैक्षिक नीतियों ने भारत में शिक्षा के विकास को किस प्रकार प्रभावित किया।\n2 – वर्तमान: आप माध्यमिक विद्यालय के विद्यार्थियों में डिजिटल अधिगम की वर्तमान स्थिति जानना चाहते हैं।\n3 – हस्तक्षेप: आप यह परीक्षण करना चाहते हैं कि नई शिक्षण विधि वर्तमान विधि की तुलना में विज्ञान उपलब्धि को बेहतर बनाती है या नहीं।\n→ प्रत्येक खिड़की के लिए उपयुक्त शोध अभिकल्प की पहचान कीजिए तथा प्रत्येक के आधार पर एक उपयुक्त शोध समस्या तैयार कीजिए।'
        },
        {
          id: '3b',
          qNum: '3.b',
          textEn: 'A researcher wants to understand how Positivism, Pre-Positivism and Post-Positivism differ in their views about knowledge and research.\n→ Differentiate among the three approaches on the basis of their view of reality, nature of knowledge, role of the researcher, and approach to objectivity. Present your answer in a concise comparative form.',
          textHi: 'एक शोधकर्ता यह समझना चाहता है कि पूर्व-प्रत्यक्षवाद (Pre-Positivism), प्रत्यक्षवाद (Positivism) और उत्तर-प्रत्यक्षवाद (Post-Positivism) ज्ञान एवं शोध के संबंध में एक-दूसरे से किस प्रकार भिन्न हैं।\n→ वास्तविकता की अवधारणा, ज्ञान की प्रकृति, शोधकर्ता की भूमिका तथा वस्तुनिष्ठता के दृष्टिकोण के आधार पर इन तीनों उपागमों में अंतर स्पष्ट कीजिए। अपना उत्तर संक्षिप्त तुलनात्मक रूप में प्रस्तुत कीजिए।'
        },
        {
          id: '3c',
          qNum: '3.c',
          textEn: 'Consider the following research problem: "A Study of the Effect of Weekly Low-Stakes Quizzes on the Final Examination Performance of Class IX Students in Science Compared with Regular Classroom Assessment."\n→ Based on the above research problem, identify and briefly explain its major components:\n1. Population — Who is being studied?\n2. Independent Variable — What is being introduced or changed?\n3. Dependent Variable — What outcome is being measured?\n4. What result is measured?\n5. Comparison — What is the intervention being compared with?\n6. Context/Subject — In what educational context is the study conducted?\n7. Relationship/Effect — What relationship or effect is being investigated?',
          textHi: 'उपरोक्त शोध समस्या: "नियमित कक्षा मूल्यांकन की तुलना में साप्ताहिक कम-जोखिम वाली क्विज़ के कक्षा IX के विज्ञान विषय के विद्यार्थियों की अंतिम परीक्षा के प्रदर्शन पर प्रभाव का एक अध्ययन।"\n→ उपरोक्त शोध समस्या के प्रमुख घटकों की पहचान करते हुए उनका संक्षिप्त वर्णन कीजिए:\n1. Population / जनसंख्या — किसका अध्ययन किया जा रहा है?\n2. Independent Variable / स्वतंत्र चर — किस कारक में परिवर्तन/हस्तक्षेप किया जा रहा है?\n3. Dependent Variable / आश्रित चर — किस परिणाम का मापन किया जा रहा है?\n4. किस परिणाम का मापन किया जा रहा है?\n5. Comparison / तुलना — हस्तक्षेप की तुलना किससे की जा रही है?\n6. Context/Subject / संदर्भ/विषय — अध्ययन किस शैक्षिक संदर्भ में किया जा रहा है?\n7. Relationship/Effect / संबंध/प्रभाव — किस संबंध अथवा प्रभाव की जाँच की जा रही है?'
        }
      ]
    }
  ]
}

export const med305PaperData: ExamPaperDetail = {
  id: 'MED305-2025',
  courseCode: 'MED305',
  title: 'Educational Administration & Planning',
  university: 'M.Ed. III Semester Examination',
  department: 'DEPARTMENT OF EDUCATION',
  examName: 'FIRST MID–SEMESTER EXAMINATION',
  semester: 'M.Ed. III Semester',
  session: '2025 – 27 (Odd Semester)',
  maxTime: '1 Hour 30 Minutes',
  maxMarks: 30,
  note: 'All Questions are Compulsory / सभी प्रश्न अनिवार्य हैं',
  sections: [
    {
      title: 'SECTION – A',
      marks: '9 × 1 = 9 Marks',
      instructions: 'Attempt all Questions (सभी प्रश्नों का उत्तर दीजिये) - (9×1 = 9)',
      questions: [
        {
          id: '1a',
          qNum: '1.a',
          textEn: 'Educational Administration is primarily a process of:',
          textHi: 'शैक्षिक प्रशासन मुख्य रूप से एक प्रक्रिया है:',
          options: [
            { code: 'a', textEn: 'Maintaining discipline', textHi: 'अनुशासन बनाए रखने की' },
            { code: 'b', textEn: 'Directing and controlling', textHi: 'निर्देशन और नियंत्रण की' },
            { code: 'c', textEn: 'Managing resources to achieve educational goals', textHi: 'शैक्षिक लक्ष्यों को प्राप्त करने के लिए संसाधनों का प्रबंधन करने की', correct: true },
            { code: 'd', textEn: 'Implementing government policies', textHi: 'सरकारी नीतियों को लागू करने की' }
          ]
        },
        {
          id: '1b',
          qNum: '1.b',
          textEn: 'The scope of educational administration is:',
          textHi: 'शैक्षिक प्रशासन का दायरा है:',
          options: [
            { code: 'a', textEn: 'Limited to schools only', textHi: 'केवल स्कूलों तक सीमित' },
            { code: 'b', textEn: 'Limited to universities only', textHi: 'केवल विश्वविद्यालयों तक सीमित' },
            { code: 'c', textEn: 'Very wide, covering all educational institutions', textHi: 'बहुत व्यापक, जो सभी शैक्षिक संस्थानों को कवर करता है', correct: true },
            { code: 'd', textEn: 'Limited to policy-making bodies', textHi: 'केवल नीति-निर्माण निकायों तक सीमित' }
          ]
        },
        {
          id: '1c',
          qNum: '1.c',
          textEn: 'Which of the following is NOT a function of educational administration?',
          textHi: 'निम्नलिखित में से कौन सा शैक्षिक प्रशासन का कार्य नहीं है?',
          options: [
            { code: 'a', textEn: 'Planning', textHi: 'योजना बनाना' },
            { code: 'b', textEn: 'Organizing', textHi: 'आयोजन करना' },
            { code: 'c', textEn: 'Indoctrination', textHi: 'अंधविश्वास फैलाना', correct: true },
            { code: 'd', textEn: 'Evaluation', textHi: 'मूल्यांकन करना' }
          ]
        },
        {
          id: '1d',
          qNum: '1.d',
          textEn: 'The concept of educational management is more focused on:',
          textHi: 'शैक्षिक प्रबंधन की अवधारणा अधिक केंद्रित है:',
          options: [
            { code: 'a', textEn: 'Rigid rules and regulations', textHi: 'कठोर नियमों और विनियमों पर' },
            { code: 'b', textEn: 'The efficient use of resources for specific objectives', textHi: 'विशिष्ट उद्देश्यों के लिए संसाधनों के कुशल उपयोग पर', correct: true },
            { code: 'c', textEn: 'Punishing non-compliant staff', textHi: 'अवज्ञाकारी कर्मचारियों को दंडित करने पर' },
            { code: 'd', textEn: 'Maintaining the status quo', textHi: 'यथास्थिति बनाए रखने पर' }
          ]
        },
        {
          id: '1e',
          qNum: '1.e',
          textEn: 'The process of recruiting, selecting, and developing personnel in an educational institution is known as:',
          textHi: 'एक शैक्षिक संस्थान में कर्मियों की भर्ती, चयन और विकास की प्रक्रिया को कहा जाता है:',
          options: [
            { code: 'a', textEn: 'Financial Administration', textHi: 'वित्तीय प्रशासन' },
            { code: 'b', textEn: 'Personnel Administration', textHi: 'कार्मिक प्रशासन', correct: true },
            { code: 'c', textEn: 'Academic Administration', textHi: 'शैक्षणिक प्रशासन' },
            { code: 'd', textEn: 'General Administration', textHi: 'सामान्य प्रशासन' }
          ]
        },
        {
          id: '1f',
          qNum: '1.f',
          textEn: 'The primary goal of conflict management is to:',
          textHi: 'संघर्ष प्रबंधन का प्राथमिक लक्ष्य है:',
          options: [
            { code: 'a', textEn: 'Eliminate all conflicts', textHi: 'सभी संघर्षों को समाप्त करना' },
            { code: 'b', textEn: 'Suppress conflicts forcefully', textHi: 'बलपूर्वक संघर्षों का दमन करना' },
            { code: 'c', textEn: 'Resolve conflicts constructively for organizational health', textHi: 'संगठनात्मक स्वास्थ्य के लिए संघर्षों को रचनात्मक रूप से हल करना', correct: true },
            { code: 'd', textEn: 'Ignore conflicts until they disappear', textHi: 'संघर्षों को तब तक अनदेखा करना जब तक वे गायब न हो जाएं' }
          ]
        },
        {
          id: '1g',
          qNum: '1.g',
          textEn: 'Organizational compliance in education refers to:',
          textHi: 'शिक्षा में संगठनात्मक अनुपालन का तात्पर्य है:',
          options: [
            { code: 'a', textEn: 'Adherence to rules, regulations, and policies', textHi: 'नियमों, विनियमों और नीतियों का पालन', correct: true },
            { code: 'b', textEn: 'Encouraging teachers to be independent', textHi: 'शिक्षकों को स्वतंत्र होने के लिए प्रोत्साहित करना' },
            { code: 'c', textEn: 'Reducing the workload of the staff', textHi: 'कर्मचारियों का कार्यभार कम करना' },
            { code: 'd', textEn: 'Increasing the salary of employees', textHi: 'कर्मचारियों का वेतन बढ़ाना' }
          ]
        },
        {
          id: '1h',
          qNum: '1.h',
          textEn: 'Decision-making in educational administration is a:',
          textHi: 'शैक्षिक प्रशासन में निर्णय लेना एक है:',
          options: [
            { code: 'a', textEn: 'One-time activity', textHi: 'एक बार का कार्य' },
            { code: 'b', textEn: 'Continuous and dynamic process', textHi: 'निरंतर और गतिशील प्रक्रिया', correct: true },
            { code: 'c', textEn: 'Process solely for top-level administrators', textHi: 'प्रक्रिया केवल शीर्ष स्तर के प्रशासकों के लिए' },
            { code: 'd', textEn: 'Process that should always be autocratic', textHi: 'प्रक्रिया जो हमेशा निरंकुश होनी चाहिए' }
          ]
        },
        {
          id: '1i',
          qNum: '1.i',
          textEn: "The 'management of educational institution' involves managing:",
          textHi: "'शैक्षिक संस्थान का प्रबंधन' में प्रबंधन शामिल है:",
          options: [
            { code: 'a', textEn: 'Only the students', textHi: 'केवल छात्रों का' },
            { code: 'b', textEn: 'Only the teaching staff', textHi: 'केवल शिक्षण कर्मचारियों का' },
            { code: 'c', textEn: 'Only the physical infrastructure', textHi: 'केवल भौतिक बुनियादी ढांचे का' },
            { code: 'd', textEn: 'All human, physical, and financial resources', textHi: 'सभी मानव, भौतिक और वित्तीय संसाधनों का', correct: true }
          ]
        }
      ]
    },
    {
      title: 'SECTION – B',
      marks: '3 × 3 = 9 Marks',
      instructions: 'Attempt any three questions from the following (किन्हीं तीन प्रश्नों का उत्तर दीजिये) - (3×3 = 9)',
      questions: [
        {
          id: '2a',
          qNum: '2.a',
          textEn: 'Define Educational Administration and mention its two key functions.',
          textHi: 'शैक्षिक प्रशासन को परिभाषित करें और इसके दो प्रमुख कार्यों का उल्लेख करें।'
        },
        {
          id: '2b',
          qNum: '2.b',
          textEn: 'Differentiate between Educational Administration and Educational Management.',
          textHi: 'शैक्षिक प्रशासन और शैक्षिक प्रबंधन के बीच अंतर बताइए।'
        },
        {
          id: '2c',
          qNum: '2.c',
          textEn: 'What is the importance of Personnel Administration in an educational institution?',
          textHi: 'एक शैक्षिक संस्थान में कार्मिक प्रशासन का क्या महत्व है?'
        },
        {
          id: '2d',
          qNum: '2.d',
          textEn: "Write a short note on 'Organizational Compliance'.",
          textHi: "'संगठनात्मक अनुपालन' पर एक संक्षिप्त टिप्पणी लिखें।"
        }
      ]
    },
    {
      title: 'SECTION – C',
      marks: '2 × 6 = 12 Marks',
      instructions: 'Attempt any two questions from the following (किन्हीं दो प्रश्नों का उत्तर दीजिये) - (2×6 = 12)',
      questions: [
        {
          id: '3a',
          qNum: '3.a',
          textEn: 'Explain the meaning, nature, and scope of Educational Administration in detail.',
          textHi: 'शैक्षिक प्रशासन के अर्थ, प्रकृति और क्षेत्र को विस्तार से समझाइए।'
        },
        {
          id: '3b',
          qNum: '3.b',
          textEn: 'What is Conflict Management? Discuss the various strategies for managing conflicts in an educational setting.',
          textHi: 'संघर्ष प्रबंधन क्या है? एक शैक्षिक परिवेश में संघर्षों के प्रबंधन के लिए विभिन्न रणनीतियों पर चर्चा करें।'
        },
        {
          id: '3c',
          qNum: '3.c',
          textEn: 'Discuss the concept of decision-making. Explain the steps involved in the decision-making process in educational administration.',
          textHi: 'निर्णय लेने की अवधारणा पर चर्चा करें। शैक्षिक प्रशासन में निर्णय लेने की प्रक्रिया में शामिल चरणों को समझाइए।'
        }
      ]
    }
  ]
}
