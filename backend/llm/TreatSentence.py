from transformers import AutoModelForTokenClassification, DistilBertTokenizerFast, pipeline
import torch

class NER:
    def __init__(self, model_name):
        """
        Initializes the NER (Named Entity Recognition) class.

        Parameters:
        - model_name (str): The name of the pre-trained model for token classification.
        """
        self.tokenizer = DistilBertTokenizerFast.from_pretrained('distilbert-base-cased')
        self.model = AutoModelForTokenClassification.from_pretrained(model_name)
        self.recognizer = pipeline("ner", model=self.model, tokenizer=self.tokenizer)

        # Mapping from labels to human-readable tags
        self.tag_dic = {
            'LABEL_0': 'B-Size',
            'LABEL_1': 'B-Design',
            'LABEL_2': 'I-Material',
            'LABEL_3': 'I-Design',
            'LABEL_4': 'B-Color',
            'LABEL_5': 'I-Furniture',
            'LABEL_6': 'I-Color',
            'LABEL_7': 'I-Size',
            'LABEL_8': 'B-Material',
            'LABEL_9': 'B-Furniture',
            'LABEL_10': '0',
        }

        # List of unique tags
        self.unique_tag = ['B-Color', 'I-Color', 'B-Furniture', 'I-Furniture', 'B-Material', 'I-Material', 'B-Size',
                           'I-Size', 'B-Design', 'I-Design', 'O']

    def return_dic(self, sentence):
        """
        Returns a dictionary of recognized entities in the given sentence.

        Parameters:
        - sentence (str): The input sentence.

        Returns:
        - List[Dict[str, Union[str, float]]]: A list of dictionaries containing information about recognized entities.
        """
        result_tag = self.recognizer(sentence)

        for rt in result_tag:
            rt['entity'] = self.tag_dic[rt['entity']]

        return result_tag

    def get_tag(self, sentence):
        """
        Returns a set of recognized tags in the given sentence.

        Parameters:
        - sentence (str): The input sentence.

        Returns:
        - Set[str]: A set of recognized tags.
        """
        dic = self.return_dic(sentence)

        tag = set()
        for d in dic:
            # if d['score'] > 0.88:
            tag.add(d['entity'])

        return tag

    def get_missing_tags(self, sentence):
        """
        Returns a list of missing tags in the given sentence based on recognized tags.

        Parameters:
        - sentence (str): The input sentence.

        Returns:
        - List[str]: A list of missing tags.
        """
        tag = self.get_tag(sentence)
        recommend_tag = ['B-Color', 'B-Furniture', 'B-Material', 'B-Size', 'B-Design']
        [recommend_tag.remove(t) for t in tag if t in recommend_tag]

        if len(recommend_tag) > 0:
            result = [r.split('-')[1] for r in recommend_tag]
        else:
            result = []
        return result
