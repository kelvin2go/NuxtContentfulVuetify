import Vue from 'vue'
// the component
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// the library
import fontawesome from '@fortawesome/fontawesome'
// add more icon categories as you want them, even works with pro packs
import brands from '@fortawesome/fontawesome-free-brands'
import freesvg from '@fortawesome/free-solid-svg-icons'
import { faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons'

// asociate it to the library, if you need to add more you can separate them by a comma
fontawesome.library.add(brands)
fontawesome.library.add(faBriefcase)
fontawesome.library.add(faUser)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)
