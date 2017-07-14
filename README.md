> Markdown editor for all md-addcited who want to write text fast. 
> No mouse, only efficient keyboard shortcuts 

## Demo
Play with [Narcotic Mardown Editor demo](https://fadehelix.github.io/narcoticmd).

## The short story
I like what Terry Pratchett callled in one book of his  "The Science of Discworld" sub-series: The narrativum. This element ensure everyone that everything what happens is accordant to the story.
So, let me show you a short tale:


> _Hi, I am Bill,
>I am the tech blogger in "Thlskjdi" press company and I am in trouble.  I need to very fast write a blog about new super hyped javascript library. If I'l fail, my boss Jack fires me. 
I dont't know anything about this library. I need to learn fast. I need coffee. But coffee may not give me required boost...  I know! I should have a phone number to a drug dealer I met on last party... yes, drugs can help me to be more efficient, focused and allow me to learn faster.
>_
>
>But Bill didn't notice that he has been following by a policeman. After short time the police will know ewerything about Bill and they catch him. 
Will he write the post and send it to the Jack befere the cops come into his flat?


## Already working components:
### Druggy
The Single Source of Truth. Container for SimpleMDE and all other drugs... i mean components.

### Cocaine
__Popup which appear when text is selected. It contains all most popular formatting options.__    
User can choose option just by pressing any key (`b` for bold selected text, `u` for underline, `l` for link)
* _Cocaine_ - popup with formatting options.
* _Cocaine_ - keyboard shortcuts like __b__, __i__, __s__ - only letters,
* _Cocaine__ - close by ~~__shift__~~ or __escape__,
* ~~Double __shift__ - enable cocaine without onSelect.~~

## To be implemented:
### Extasy
__Adnotation for text__ (For examle when I'm writting about emulator and I need to check the infromation, or research more)

### Police
__Preview output html__
* Extend preview feature in SimpleMDE

### Joint 
__Configuration in JSON__
* Keyboard shortcuts
* Theme

### Others
* Double shift opens Cocaine event when no text is selected,
* Press shift for 2(?) seconds opens Cocaine with alternative options

## Credits
Icons:
 * [Gregor Cresnar](http://www.flaticon.com/authors/gregor-cresnar) from [flaticon.com](http://www.flaticon.com)
 
Libraries:
 * [SimpleMDE editor](https://simplemde.com/) and related react component [react-simplemde-editor](https://github.com/benrlodge/react-simplemde-editor),
 * [Mousetrap](https://craig.is/killing/mice) - awesome pure js library for handling keyboard events.
 * [React](https://facebook.github.io/react/) and [create-react-app](https://github.com/facebookincubator/create-react-app)

 
## License
MIT