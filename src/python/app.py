import customtkinter

coach = False
teams = []
div = 3


class MyRadiobuttonFrame(customtkinter.CTkFrame):
    def __init__(self, master, values):
        super().__init__(master)
        self.grid_columnconfigure(0, weight=1)
        self.values = values
        self.radiobuttons = []
        self.variable = customtkinter.StringVar(value="")

        for i, value in enumerate(self.values):
            radiobutton = customtkinter.CTkRadioButton(
                self, text=value, value=i, variable=self.variable
            )
            radiobutton.grid(row=1, column=i + 1, padx=10, pady=10, sticky="w")
            self.radiobuttons.append(radiobutton)

    def get(self):
        return self.variable.get()

    def set(self, value):
        self.variable.set(value)


class teamCreate(customtkinter.CTkFrame):
    def __init__(self, master):
        super().__init__(master)
        self.grid_columnconfigure(0, weight=1)

        self.R1 = customtkinter.CTkEntry(self, placeholder_text="Red One")
        self.R1.grid(row=0, column=0, padx=10, pady=10, sticky="ew")

        self.R2 = customtkinter.CTkEntry(self, placeholder_text="Red Two")
        self.R2.grid(row=1, column=0, padx=10, pady=10, sticky="ew")

        self.R3 = customtkinter.CTkEntry(self, placeholder_text="Red Three")
        self.R3.grid(row=2, column=0, padx=10, pady=10, sticky="ew")

        self.R4 = customtkinter.CTkEntry(self, placeholder_text="Red Four")
        self.R4.grid(row=3, column=0, padx=10, pady=10, sticky="ew")

        self.R5 = customtkinter.CTkEntry(self, placeholder_text="Red Five")
        self.R5.grid(row=4, column=0, padx=10, pady=10, sticky="ew")

        self.Y1 = customtkinter.CTkEntry(self, placeholder_text="Yellow One")
        self.Y1.grid(row=0, column=1, padx=10, pady=10, sticky="ew")

        self.Y2 = customtkinter.CTkEntry(self, placeholder_text="Yellow Two")
        self.Y2.grid(row=1, column=1, padx=10, pady=10, sticky="ew")

        self.Y3 = customtkinter.CTkEntry(self, placeholder_text="Yellow Three")
        self.Y3.grid(row=2, column=1, padx=10, pady=10, sticky="ew")

        self.Y4 = customtkinter.CTkEntry(self, placeholder_text="Yellow Four")
        self.Y4.grid(row=3, column=1, padx=10, pady=10, sticky="ew")

        self.Y5 = customtkinter.CTkEntry(self, placeholder_text="Yellow Five")
        self.Y5.grid(row=4, column=1, padx=10, pady=10, sticky="ew")

    def get(self):
        Team = []
        if self.R1.get() is None:
            Team.append("Red One")
        else:
            Team.append(self.R1.get())
        if self.R2.get() is None:
            Team.append("Red Two")
        else:
            Team.append(self.R2.get())
        if self.R3.get() is None:
            Team.append("Red Three")
        else:
            Team.append(self.R3.get())
        if self.R4.get() is None:
            Team.append("Red Four")
        else:
            Team.append(self.R4.get())
        if self.R5.get() is None:
            Team.append("Red Five")
        else:
            Team.append(self.R5.get())
        if self.Y1.get() is None:
            Team.append("Yellow One")
        else:
            Team.append(self.Y1.get())
        if self.Y2.get() is None:
            Team.append("Yellow Two")
        else:
            Team.append(self.Y2.get())
        if self.Y3.get() is None:
            Team.append("Yellow Three")
        else:
            Team.append(self.Y3.get())
        if self.Y4.get() is None:
            Team.append("Yellow Four")
        else:
            Team.append(self.Y4.get())
        if self.Y5.get() is None:
            Team.append("Yellow Five")
        else:
            Team.append(self.Y5.get())

        return Team


class launch(customtkinter.CTkToplevel):
    def __init__(self, master):
        super().__init__()

        self.title("Scoresheet Setup")
        self.geometry("550x500")
        self.grid_columnconfigure(0, weight=1)

        self.divTitle = customtkinter.CTkLabel(self, text="Division Select:")
        self.divTitle.grid(row=0, column=0, padx=10, pady=(10, 0))

        self.divSelect = MyRadiobuttonFrame(
            self, values=["Beginner", "Junior", "Intermediate", "Experienced"]
        )
        self.divSelect.grid(row=1, column=0, padx=10, pady=10)

        self.teamTitle = customtkinter.CTkLabel(self, text="Teams:")
        self.teamTitle.grid(row=2, column=0, padx=10, pady=(10, 0))

        self.teams = teamCreate(self)
        self.teams.grid(row=3, column=0, padx=10, pady=10)

        self.coachView = customtkinter.CTkCheckBox(self, text="Coach view")
        self.coachView.grid(row=4, column=0, padx=10, pady=10)

        self.newSheet = customtkinter.CTkButton(
            self, text="New Scoresheet", command=self.newSheet
        )
        self.newSheet.grid(row=5, column=0, padx=10, pady=10)

    def newSheet(self):
        teams = self.teams.get()
        coach = self.coachView.get()
        div = self.divSelect.get()
        self.destroy()


class app(customtkinter.CTk):
    def __init__(self):
        super().__init__()
        self.title("Scoresheet")
        self.geometry("700x800")

        self.launch_window = launch(self)
        self.launch_window.attributes("-topmost", "true")


class teamScoreInput(customtkinter.CTkFrame):
    def __init__(self, master, value):
        super().__init__()


class indScoreInput(customtkinter.CTkFrame):
    def __init__(self, master, value):
        super().__init__()
        self.quizzer = CTkComboBox(self, values=[teams[value+0], teams[value+1], teams[value+2]])


app = app()

app.mainloop()
