.PHONY: compile-diag
.PHONY: serve

compile-diag:
	java -jar tools/plantuml.jar -o ../html/diag diag

install:
	cd html; cp -r * /usr/local/var/www
	
serve:
	cd html; python3 -m http.server