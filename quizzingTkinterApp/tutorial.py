import customtkinter\

def newScoresheet():
	print("Test")

app = customtkinter.CTk()
app.title("My App")
app.geometry("400x150")

coachView = customtkinter.CTkCheckBox(app, text="Enable Coach View")
coachView.grid(row=1, column=0, padx=20, pady=(0, 20))

button = customtkinter.CTkButton(app, text = "New Scoresheet", command=newScoresheet)
button.grid(row=2, column=0, padx=20, pady=20)
app.grid_columnconfigure(0, weight=1)

app.mainloop()
