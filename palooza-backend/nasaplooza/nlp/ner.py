import spacy
from spacy import displacy

NER = spacy.load("en_core_web_lg")
NER.max_length=1037791

def get_ner_html(text):
   document = NER(str(text))
   html =  displacy.render(document, style='ent', page=True,jupyter=False)
   return html