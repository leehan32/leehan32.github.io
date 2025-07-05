# Use the official Jekyll image
FROM jekyll/jekyll:latest

# Set the working directory in the container
WORKDIR /srv/jekyll

# Copy the Gemfile and Gemfile.lock to the container
# and install gems
COPY Gemfile* ./
RUN bundle install

# Copy the rest of the application's code
COPY . .

# Expose the port Jekyll runs on
EXPOSE 4000

# Serve the site with live reload
CMD ["jekyll", "serve", "--watch", "--force_polling", "--host", "0.0.0.0"]
