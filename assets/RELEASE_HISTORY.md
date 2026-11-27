# Release History

<!--
Shown in the app under Help > About > Release History (on a Mac, the
ShamiComposer menu > About), so write for the people using the app.

Add an entry at the top for every merge into main, headed with the date of
the merge ("## 23 November 2026"). While the work is still on a branch,
head it "## Next release". Group the changes under "###" headings and list
them with "- ". Wrap a few words in **double asterisks** to make them bold.
Nothing else is formatted, and HTML comments like this one aren't shown.
-->

## 27 November 2026

### Google Drive

- **Deleted scores stay deleted.** A score you delete no longer comes back
  from your other browsers and computers. It's also removed there at their
  next sync, unless it was edited there after you deleted it. Deleted
  scores go to Google Drive's Trash, where you can restore them for 30
  days.
- **Edits on two devices are both kept.** If a score was changed on two
  devices before they synced, you get both versions: one keeps the name,
  and the other is saved as "(conflicted copy)". Before, one device's
  changes were lost.
- **You can see Reconnect working.** After you click Reconnect, the
  banner shows it signing in to Google Drive, then syncing, with how many
  scores it has got through.

### Playback

- **Tied notes play as one long note.** A suri onto the same fret is now
  held, not plucked again.
- **Suri slides.** A suri onto a different fret now slides up or down to
  the next note instead of plucking it again, the way it's played on the
  shamisen.

### Scores

- **Custom tunings.** The Tuning menu, in Create a New Notation and File
  Properties, now has Custom…, where you pick the note for each string:
  ichi-no-ito from A2 to F3, ni-no-ito from D3 to B3 and san-no-ito from
  G3 to F4. It starts at the score's current tuning. You can give it a
  name, like "Honchoushi 6-hon", and the score shows that name, with its
  notes after it if you tick the box. Without a name, the score shows its
  notes from ichi-no-ito to san-no-ito, like "A-D-A". Every note a custom
  tuning can reach plays back, from A2 up to D6.
- **Hon Choushi is spelled correctly.** It was "Hon Choshi". Scores saved
  with the old spelling show the new one.

### Printing

- **The PDF matches the screen.** Rows of measures now break in the same
  places on paper as on screen, with notes spaced the same way. When the
  window is wider than the page, the whole score is shrunk to fit.

### Writing notes

- **Suri follows the rules.** A suri can't go into a kamashi, a triplet,
  or a note marked sukui, hajiki or uchi, so marking one there is refused
  and the toast says why. Changing the note after a suri into one of these
  takes the suri off. A suri into another suri, for a long tie or a slide
  after a slide, is still fine.

## 24 November 2026

### Sharing

- **Links to shamiComposer look better when shared.** Posting the link in
  a chat or on social media now shows a short description and the
  shamiComposer logo, not "A new Flutter project."

## 24 November 2026

### Writing notes

- **Enter notes freely.** Measures no longer have to be full while you
  work. A new measure starts empty, and a note goes wherever you type it.
- **Room is made for longer notes.** Making a note longer, or adding one,
  moves the notes after it along just far enough. If the measure has no
  room, the note keeps its length (or a new note gets the longest length
  that fits), and the selection flashes red with a message saying why.
- New notes use the **last length you chose**, starting with a quarter
  note in each score.
- **Measure health.** Two lights next to the score's name show whether the
  selected measure and the whole score are complete (green), have time
  without notes or rests (yellow), or have notes that overlap or run past
  the bar line (red). Hover over a light for details; click the score's
  light to go to the first measure that needs attention.
- The score always ends with an empty measure holding a **+** button for
  adding another.
- Press **Esc**, or click the paper around the score, to deselect.
- The right arrow key stops at the end of the score. **Tab** still adds a
  measure.

### Repeats

- **Measure repeats.** Turn a measure into a repeat sign with Components >
  Miscellaneous > Toggle Repeat Measure, or the Repeat measure button under
  Measures. Playback plays the measure before it again.
- **Start and end repeat bar lines.** Mark a section to play twice with
  Toggle Measure Start and Toggle Measure End, or the Start repeat and End
  repeat buttons. Playback follows them.

### Time signatures

- **Any time signature.** A new piece can be in 2/4, 4/4, 3/4, 6/8, or a
  custom signature with any number of beats. Older scores in another
  signature now keep it instead of opening in 2/4.
- **Timing note.** Add a note such as はずんで, shown after the time
  signature on screen and in the PDF. Set it when creating a piece or in
  File > Properties.

### Notation

- Two more kamashi styles, 3 and 4.
- The finger number now goes under a note that starts a suberi.

### Layout

- **What you edit is what prints.** The measure you're editing is drawn
  the same as every other measure and the same as in the PDF.
- The Variable spacing slider is now a **percentage**: at 0% every note is
  the same width, and at 100% a note's width follows its length. Scores
  open at 50%, close to the old spacing.
- A **Justify rows** switch under Measure Spacing stretches each row to
  the full width, or leaves rows at their natural width when off. A last
  row that's at least half full is stretched too.
- A measure repeat is always drawn wide enough for its sign.

### Tool panel

- Note length, technique and finger are now **segmented buttons**. Tap the
  chosen finger or technique again to clear it.
- The Components and Measures actions are buttons with icons and tooltips.
- Each section can be **collapsed** by clicking its title, and stays that
  way the next time you open the app.

### Playback and keyboard

- **Space** plays from the selected measure, and stops playback. (Space no
  longer makes a note longer; use **=** or **+**.)
- **Help > Keyboard Shortcuts** lists every key.

### Around the app

- A **new app icon**, also used for the browser tab, and a new logo at
  the top of the window.
- Larger play, tempo and settings controls at the top of the window.
- **Help > About** has a Release History button that lists what's new in
  each release.

### Saving

- Scores saved with this version use a newer file format, so older
  versions of the app can't open them.
