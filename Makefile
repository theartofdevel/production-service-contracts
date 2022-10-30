BUF_VERSION=1.6.0

.PHONY: proto
proto: clean format gen lint

.PHONY: gen
gen:
	@$(GOPATH)/bin/buf generate
	@for dir in $(CURDIR)/gen/go/*/; do \
	  cd $$dir && \
	  go mod init && go mod tidy; \
  	done

.PHONY: lint
lint:
	@$(GOPATH)/bin/buf lint

.PHONY: format
format:
	@$(GOPATH)/bin/buf format


.PHONY: clean
clean:
	@rm -rf ./gen || true