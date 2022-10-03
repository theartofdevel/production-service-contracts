BUF_VERSION=1.6.0

.PHONY: proto
proto: clean format gen lint

.PHONY: buf-install
buf-install:
	$(shell ./install_buf.sh)

.PHONY: gen
gen: buf-install
	@$(GOPATH)/bin/buf generate
	@for dir in $(CURDIR)/gen/go/*/; do \
	  cd $$dir && \
	  go mod init && go mod tidy; \
  	done

.PHONY: lint
lint: buf-install
	@$(GOPATH)/bin/buf lint

.PHONY: format
format: buf-install
	@$(GOPATH)/bin/buf format


.PHONY: clean
clean:
	@rm -rf ./gen || true