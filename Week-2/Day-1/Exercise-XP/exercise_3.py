# items 1-2
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
    def sing_me_a_song(self):
        for verse in self.lyrics:
            print(verse)

# item 3
stairway= Song(["There’s a lady who's sure",
                "all that glitters is gold", 
                "and she’s buying a stairway to heaven"])

# item 4
stairway.sing_me_a_song()
