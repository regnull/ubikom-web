.PHONY: compile-diag
.PHONY: serve

compile-diag:
	java -jar tools/plantuml.jar -o ../html/diag diag

serve:
	cd html; python3 -m http.server