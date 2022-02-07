(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7],{285:function(e,t,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(69).default)("5876b4f4",content,!0,{sourceMap:!1})},289:function(e,t,n){"use strict";n(285)},290:function(e,t,n){var r=n(68)(!1);r.push([e.i,".member[data-v-189978e2]{padding:2rem 1.6rem;height:100%;display:flex;flex-flow:row wrap;align-items:flex-start;align-content:center;grid-gap:calc(1rem + 1vw);gap:calc(1rem + 1vw);font-size:clamp(1.4rem,1.3354rem + .202vw,1.6rem);text-align:left;border:1px solid var(--accent);border-radius:1rem}.member *[data-v-189978e2]{margin:0}.member__info[data-v-189978e2]{flex-basis:0;flex-grow:999;min-width:60%}.member__photo[data-v-189978e2]{flex-basis:80px;flex-grow:1}.member__info>*+*[data-v-189978e2]{margin-top:.6rem}.member__photo[data-v-189978e2]  img{border-radius:50%}",""]),e.exports=r},291:function(e,t,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(69).default)("07f6ab30",content,!0,{sourceMap:!1})},293:function(e,t,n){"use strict";n.r(t);var r={props:{member:{type:Object,default:function(){return null},required:!0}}},o=(n(289),n(18)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"member"},[e.member.photo?n("nuxt-picture",{staticClass:"member__photo",attrs:{src:e.member.photo,width:"80",height:"80",loading:"lazy"}}):e._e(),e._v(" "),n("div",{staticClass:"member__info"},[n("h3",{staticClass:"member__name"},[e._v(e._s(e.member.name))]),e._v(" "),n("p",{staticClass:"member__role"},[e._v(e._s(e.member.role))]),e._v(" "),n("p",{staticClass:"member__job"},[e._v(e._s(e.member.job))])])],1)}),[],!1,null,"189978e2",null);t.default=component.exports},294:function(e,t,n){"use strict";n(291)},295:function(e,t,n){var r=n(68)(!1);r.push([e.i,".hp-intro[data-v-0ff9b820]{margin:4rem auto 2rem;max-width:120rem;display:grid;grid-template-columns:1fr;align-items:center;justify-content:space-between;grid-gap:6rem;gap:6rem}.hp-intro h1[data-v-0ff9b820]{margin:0}.hp-intro__subtitle[data-v-0ff9b820]{font-size:clamp(2.6rem,2.4rem + .625vw,3.2rem);font-weight:300}.hp-intro__links[data-v-0ff9b820]{margin-top:2rem;display:flex;flex-direction:column;align-items:flex-start}.hp-intro__links>*[data-v-0ff9b820]{margin:0}.hp-intro__links>*+*[data-v-0ff9b820]{margin-top:1.6rem}.hp-intro__image[data-v-0ff9b820]{position:relative;justify-self:center}.members__list[data-v-0ff9b820],.partners__list[data-v-0ff9b820]{margin-top:3rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr));grid-gap:3rem;gap:3rem}.partners__list[data-v-0ff9b820]{align-items:center}.partner[data-v-0ff9b820]{padding:2rem;height:100%;display:flex;align-content:center;justify-content:center;place-content:center;border-radius:8px;background-color:var(--contrast)}@media screen and (min-width:1024px){.hp-intro[data-v-0ff9b820]{min-height:calc(100vh - 13.6rem);grid-template-columns:3fr 2fr}}",""]),e.exports=r},319:function(e,t,n){"use strict";n.r(t);var r=n(7),o=(n(42),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.error,t.next=3,n("members").sortBy("createdAt","asc").fetch().catch((function(e){r({statusCode:404,message:"Page not found"}),console.log(e)}));case 3:return o=t.sent,t.abrupt("return",{members:o});case 5:case"end":return t.stop()}}),t)})))()}}),l=(n(294),n(18)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"main-content"}},[n("section",{staticClass:"hp-intro"},[n("div",{staticClass:"hp-intro__content"},[n("h1",[e._v("Brain Covid")]),e._v(" "),n("p",{staticClass:"hp-intro__subtitle"},[e._v("\n        Data sharing and collaboration initiative\n      ")]),e._v(" "),n("p",[e._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi natus\n        ratione laudantium, impedit, itaque enim consectetur deserunt ab\n        assumenda fugit molestias numquam repudiandae in autem dignissimos\n        mollitia, sunt optio a!\n      ")]),e._v(" "),n("div",{staticClass:"hp-intro__links"},[n("nuxt-link",{staticClass:"button",attrs:{to:"/mri/"}},[e._v("MRI data")]),e._v(" "),n("nuxt-link",{staticClass:"button",attrs:{to:"/histology/"}},[e._v("Histology data")]),e._v(" "),n("nuxt-link",{attrs:{to:"#about"}},[e._v("Learn more about this projet")])],1)]),e._v(" "),n("div",{staticClass:"hp-intro__image"},[n("nuxt-picture",{staticClass:"hp-intro__image",attrs:{src:"/homepage/human-brain-color.png",sizes:"sm:100vw xl:400px",alt:"",width:"400",height:"500"}})],1)]),e._v(" "),n("section",[n("article",{staticClass:"editorial",attrs:{id:"about"}},[n("h1",[e._v("About this project")]),e._v(" "),n("p",[e._v("\n        COVID-19 is a major public health problem that has affected almost the\n        entire planet, causing 12 million cases and more than 550 000 deaths\n        (Public Health France).\n      ")]),e._v(" "),n("p",[e._v("\n        Check out our "),n("nuxt-link",{attrs:{to:"#members"}},[e._v("members")]),e._v(" and\n        "),n("nuxt-link",{attrs:{to:"#partners"}},[e._v("partners")])],1),e._v(" "),n("h2",[e._v("Genesis")]),e._v(" "),n("p",[e._v("\n        If most deaths are due to respiratory or cardiovascular failure, it\n        quickly became apparent during the epidemic that the virus had a\n        tropism for the central nervous system (Ellul et al. 2020). The\n        nervous impairment seems to take many forms and its mechanisms,\n        undoubtedly multiple, are being explored. Certain signs and symptoms\n        plead for a direct viral attack of the nervous system: anosmia,\n        meningitis and temporal necrotizing encephalitis resembling that of\n        herpes (Moriguchi et al. 2020, Poyiadji et al. 2020).\n      ")]),e._v(" "),n("p",[e._v("\n        The detection of viral particles in the endothelium of the brain\n        vessels argues for this direct role of the virus (Paniz-Mondolfi et\n        al. 2020) and could explain the occurrence of strokes in young people\n        (Oxley et al. 2020). Neuropathological studies are still few.\n      ")]),e._v(" "),n("p",[e._v("\n        Relatively few autopsied cases and the lesions observed offer few\n        arguments for direct action by the virus (Solomon et al. 2020). Ante-\n        and post-mortem MRI imaging studies have reported multiple lesions\n        associated with micro- spotting (Coolen et al. 2020). The hypothesis\n        of secondary immune encephalitis has been raised in the face of\n        multiple lesions of the white matter suggestive of ADEM (Reichard et\n        al. 2020).\n      ")]),e._v(" "),n("p",[e._v("\n        Using postmortem MRI, subcortical micro and macro bleeds were reported\n        (Coolen et al. 2020). Here, we propose a study combining ex vivo\n        imaging by MRI and neuropathological study to elucidate the nature of\n        the lesions observed in COVID + patients, their specificity, their\n        pathophysiology whether it is directly linked to viral replication or\n        secondary to the infection. Our study aims to link ex-vivo brain MRI\n        signal abnormalities with neuropathological findings relative to the\n        SARS-CoV-2 infection.\n      ")]),e._v(" "),n("h2",[e._v("Methods")]),e._v(" "),n("p",[e._v("\n        MRI offers a “big picture” image on the whole organ compared to\n        conventional histology, which is often limited to small sections. Here\n        we will combine available techniques developed at both Institutes\n        (Institut Pasteur and Paris Brain Institute - ICM) to facilitate the\n        comparison and the characterisation of brain lesions linked to the\n        viral infection.\n      ")]),e._v(" "),n("p",[e._v("\n        Our project should produce a new description of the anatomical\n        structures affected by the infection in the central nervous system,\n        and in particular those related to the brain vascular system.\n      ")]),e._v(" "),n("p",[e._v("\n        Eight brains from COVID-19 patients will be studied and compared to\n        matched controls. Autopsies will be performed according to the current\n        procedure for interrogating the national refusal register (RNR),\n        combined with the collection of testimonies from relatives on the\n        wishes of the deceased and their information on the use of samples for\n        research.\n      ")]),e._v(" "),n("p",[e._v("\n        Sampling and storing will be done following the COVITIS protocol,\n        approved by the authorized institutions (Agence de la Biomédecine PFS\n        20-008; French ministry of research DC2020- 4022).\n      ")]),e._v(" "),n("section",[n("h2",{attrs:{id:"members"}},[e._v("Members")]),e._v(" "),n("ul",{staticClass:"members__list",attrs:{"clean-list":""}},e._l(e.members,(function(e){return n("li",{key:e.id},[n("member-card",{attrs:{member:e}})],1)})),0)]),e._v(" "),n("section",[n("h2",{attrs:{id:"partners"}},[e._v("Partners")]),e._v(" "),n("ul",{staticClass:"partners__list",attrs:{"clean-list":""}},[n("li",{staticClass:"partner"},[n("nuxt-picture",{attrs:{src:"/partners/icm-logo.png",width:"200",height:"214",loading:"lazy"}})],1),e._v(" "),n("li",{staticClass:"partner"},[n("nuxt-img",{attrs:{src:"/partners/Logo-Institut_Pasteur.svg",width:"200",height:"54",loading:"lazy"}})],1)])])])])])}),[],!1,null,"0ff9b820",null);t.default=component.exports;installComponents(component,{MemberCard:n(293).default})}}]);