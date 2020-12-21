class Citizen:
    """
    Citizen class is described by it's first and last name
    """
    greeting = "For the glory of Python!"
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        
    def full_name(self):
        return self.first_name+" "+self.last_name