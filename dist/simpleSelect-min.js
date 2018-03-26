/**
 * simple-select - Plugin Jquery para criar elementos select com opção de search
 * @version v1.0.0
 * @link https://github.com/jeffersonRibeiro/simpleSelect#readme
 * @license ISC
 */
!function(e){e.fn.simpleSelect=function(t){var n=this,o='<div class="simple-select">                            <div class="selected">'+(t=e.extend(!0,{terms:[],notFoundMessage:"Not found.",defaultSelected:"Select"},t)).defaultSelected+'</div>                            <div class="simple-select-modal">                                <input type="text"/>                                <div class="simple-select-result"></div>                            </div>                        </div>',l=e(o);function s(e){var n=l.find(".simple-select-modal .simple-select-result"),o="";if(!e.length)return n.html('<span class="not-found">'+t.notFoundMessage+"</span>"),!1;for(var s=0;s<e.length;s++)o+='<span class="option-found">'+e[s]+"</span>";n.html(o)}function i(e){for(var n=t.terms,o=[],l=new RegExp(e.toUpperCase()),s=0;s<n.length;s++)l.test(n[s].toUpperCase())&&o.push(n[s]);return o}l.insertAfter(n),l.prepend(n),function(e){var o='<option value="">'+t.defaultSelected+"</option>",s=n.find("option");if(!t.terms.length&&s.length){for(var i=0;i<s.length;i++)s[i].hasAttribute("data-defaultSelected")||t.terms.push(s[i].innerText);o='<option value="">'+s[0].innerText+"</option>",l.find(".selected").text(s[0].innerText)}for(var i=0;i<e.length;i++)o+='<option value="'+e[i]+'">'+e[i]+"</option>";l.find("select").html(o)}(t.terms);var a=l.find(".simple-select-modal input"),c=l.find(".selected");a.on("keyup",function(e){s(i(e.target.value))}),c.on("click",function(e){a.val(""),l.addClass("modal-open"),a.focus()}),a.on("focus",function(e){s(i(e.target.value))}),a.on("focusout",function(e){setTimeout(function(){l.removeClass("modal-open")},150)}),e(document).on("click",".simple-select .option-found",function(){!function(t){for(var n=l.find("select option"),o=0;o<n.length;o++)if(n[o].value===t){e(n[o]).prop("selected",!0),l.find("select").change(),l.find(".selected").text(t);break}}(e(this).text())})}}(jQuery);