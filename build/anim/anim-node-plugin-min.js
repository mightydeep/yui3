YUI.add("anim-node-plugin",function(A){A.namespace("Plugin");A.Plugin.NodeFX=function(B){B.node=B.owner;A.Plugin.NodeFX.superclass.constructor.apply(this,arguments);};A.Plugin.NodeFX.NAME="nodefxplugin";A.Plugin.NodeFX.NS="fx";A.extend(A.Plugin.NodeFX,A.Anim);},"@VERSION@",{requires:["anim-base","node-base"]});